
intent('(hi|Hello)', reply('Hi KT, (how can I help you?|What can I do for you ?)'))

intent('I (want|) (to|) (relax|rest) (a|) (little|).',reply('(Do you want read some news or watch movies?|By how?Read new or watch movies?)'))

intent('I want to read some news', '(Go|going) to news page ', p => {
    p.play('(Oke|Sound good). Going to News page')
    p.play({command: 'news',articles:[],results:[]})
})

intent('I want to see (some|) movies', '(Go|going) to movie page ', p => {
    p.play('(Oke|Sound good). Going to movie page')
    p.play({command: 'movies',articles:[],results:[]})
})

intent('I want to see the weather', '(Go|going) to weather page ', p => {
    p.play('(Oke|Sound good). Going to weather page')
    p.play({command: 'weather'})
})

intent( '(Go|going) to music (classification|) page ', p => {
    p.play('(Oke bro|Wait me bro). Going to music classification page')
    p.play({command: 'music'})
})

intent('Go (home|homepage)', p=> {
    p.play('Ok. Going to homepage.')
    p.play({command: 'home',articles:[],results:[]})
})

intent('(get|What|Give|Take) (me|is) the weather in $(LOC)', p => {
 p.play({command: 'showWeather', data:p.LOC.value})
 p.play(`Getting you the weather in ${p.LOC.value}`);
});
