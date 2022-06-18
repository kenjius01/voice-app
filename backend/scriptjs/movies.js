const APIKEY = 'c805fa1cad05662c12f0c25c8214f775';
const TMDB = "https://api.themoviedb.org/3/discover/movie";
// Add objects
let videoList = [];
let savedMovies = [];
let savedVideo = [];
onCreateProject(() => {
	const request_url = `${TMDB}?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&page=1&include_video=true`;
    console.log(request_url)
	api.axios.get(request_url)
		.then((response) => {
			let data = response.data;
			console.log(data);

			// Push video titles and IDs to videoList
			data.results.forEach(element => {
				videoList.push(element.title.replace(/[^a-zA-Z ]/g, "") + '~' + element.id);
			});

			// Join the videoList values
			project.videos = videoList.join('|');
// 			savedMovies = data;
		})
    .catch((error) => {
        console.log(error);
    });
});

intent(`What are the (top|best|most popular) movies (now|today|)?`, p => {
    let request_url = `${TMDB}?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&page=1&include_video=true`;
    api.request(request_url, (error, response, body) => {
        const {results} = JSON.parse(body);
        if(!results.length) {
            p.play('Sorry, There is an problems now.');
            return;
        }
        savedMovies = results;
         p.play({
			command: "showMovie",
			results
		});
        p.play(`Here are the top 20 movies.`);
        p.play('Would you like me to read the movie titles?');
        p.then(confirmation);
        
    })
   
   
    
});
intent(`What are the best dramas (that were released |)this year?`, p => {
    let request_url = `${TMDB}?api_key=${APIKEY}&language=en-US&with_genres=18&primary_release_year=2022&sort_by=popularity.desc`;
    api.request(request_url, (error, response, body) => {
        const {results} = JSON.parse(body);
        if(!results.length) {
            p.play('Sorry, There is an problems now.');
            return;
        }
        savedMovies = results;
         p.play({
			command: "showMovie",
			results
		});
        p.play(`Here are the top 20 movies about dramas`);
        p.play('Would you like me to read the movie titles?');
        p.then(confirmation);
        
    })
   
   
    
});

intent(`(What|) (are|) (the|) (top|best|) (movies|movie) (from|for) $(year* (.*))`, p => {
    let MOVIE_API = `${TMDB}?api_key=${APIKEY}&language=en-US&primary_release_year=${p.year.value}&sort_by=popularity.desc&include_video=true`;
    if (p.year.value) {
        api.request(MOVIE_API, (error, response, body) => {
        const {results} = JSON.parse(body);
        if(!results.length) {
            p.play('Sorry, please try searching for something else');
            return;
        } else {
            savedMovies = results;
            p.play({
			command: "showMovie",
			results
		    });
            p.play(`Here are the top 20 movies from ${p.year.value}`);
            p.play('Would you like me to read the movie titles?');
            p.then(confirmation);
        }
        
        
    })
    } else {
        p.play('Sorry. Please try again.')
    }
     
   
})

// intent(`(What|) (are|) (the|) (top|best|) (movies|movie) from 2010`, p => {
//     let MOVIE_API = `${TMDB}?api_key=${APIKEY}&language=en-US&primary_release_year=2010&sort_by=popularity.desc&include_video=true`;
//     
//         api.request(MOVIE_API, (error, response, body) => {
//         const {results} = JSON.parse(body);
//         if(!results.length) {
//             p.play('Sorry, please try searching for something else');
//             return;
//         } else {
//             savedMovies = results;
//             p.play({
// 			command: "showMovie",
// 			results
// 		    });
//             p.play(`Here are the top 20 movies from 2010`);
//             p.play('Would you like me to read the movie titles?');
//             p.then(confirmation);
//         }
//         
//         
//     })
//      
//    
// })

intent(`Tell me about (movie|) $(MOVIE p:videos)`, p => {
    p.play(`Here is something about ${p.MOVIE.value}:`)
    let result = savedMovies.find(el => el.id === parseInt(p.MOVIE.label, 10));
    if (result) {
        p.play(`${result.overview}`);
    }
    else {
        p.play('No overview for this move')
    }
    
//     console.log(result)
});
intent('open movie (number|) $(number* (.*))', (p) => {
    if(p.number.value) {
        p.play({ command:'openMovies', number: p.number.value, results:savedMovies})
    }
})
intent(`play trailer for $(MOVIE p:videos)`, p => {
    let result = ""
    result = savedMovies.find(el => el.id === parseInt(p.MOVIE.label, 10));
    p.play({ command:'play', video: result})

});


const confirmation = context(() =>{
    intent('yes',async(p) =>{
        for (let i = 0; i < 20; i++) {
            p.play({command: 'highlightMovies', results: savedMovies[i]});
            p.play(`${savedMovies[i].title}`)
	}  
    })
    intent('no',(p) =>{
        p.play('Sure,sounds good.')
    })
})
intent('back to movies page', (p) => {
    p.play('Okay, going back...');
    p.play({command: 'showMovie', results:[]})
})