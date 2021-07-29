(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(7),l=a.n(n),m=(a(15),a(9)),o=a(2),c=a(3),s=a(5),d=a(4),h=(a(16),a(17),a(18),function(e){var t=e.title,a=e.description,r=e.imgUrl,n=e.imdbUrl;return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("figure",{className:"image is-4by3"},i.a.createElement("img",{src:r,alt:"Film logo"}))),i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"media"},i.a.createElement("div",{className:"media-left"},i.a.createElement("figure",{className:"image is-48x48"},i.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),i.a.createElement("div",{className:"media-content"},i.a.createElement("p",{className:"title is-8"},t))),i.a.createElement("div",{className:"content"},a,i.a.createElement("br",null),i.a.createElement("a",{href:n},"IMDB"))))});h.defaultProps={description:""};var u=function(e){var t=e.movies;return i.a.createElement("div",{className:"movies"},t.map((function(e){return i.a.createElement(h,Object.assign({key:e.imdbId},e))})))};u.defaultProps={movies:[]};var p=a(1),g=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,i=new Array(r),n=0;n<r;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:"",titleError:"",imgUrlError:"",imdbUrlError:"",imdbIdError:""},e.handleChange=function(t){var a,r=t.target,i=r.name,n=r.value;e.setState((a={},Object(p.a)(a,i,n),Object(p.a)(a,"titleError",""),Object(p.a)(a,"imgUrlError",""),Object(p.a)(a,"imdbUrlError",""),Object(p.a)(a,"imdbIdError",""),a))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,r=a.title,i=a.description,n=a.imgUrl,l=a.imdbUrl,m=a.imdbId,o=new RegExp(/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/);switch(!0){case!r:return void e.setState({titleError:"Please enter correct title"});case!o.test(n):return void e.setState({imgUrlError:"Please enter correct imgUrl"});case!o.test(l):return void e.setState({imdbUrlError:"Please enter correct imdbUrl"});case!o.test(m):return void e.setState({imdbIdError:"Please enter correct imdbId"})}var c={title:r,description:i,imgUrl:n,imdbUrl:l,imdbId:m};e.props.addMovie(c),e.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,r=e.imgUrl,n=e.imdbUrl,l=e.imdbId,m=e.titleError,o=e.imgUrlError,c=e.imdbUrlError,s=e.imdbIdError;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"Add a movie to your collection"),i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("div",null,"Title"),i.a.createElement("input",{value:t,type:"text",name:"title",onChange:this.handleChange,placeholder:"write a title"}),i.a.createElement("span",null,m),i.a.createElement("div",null,"Description"),i.a.createElement("textarea",{value:a,name:"description",onChange:this.handleChange,placeholder:"write a description"}),i.a.createElement("div",null,"imgUrl"),i.a.createElement("input",{type:"text",value:r,name:"imgUrl",onChange:this.handleChange,placeholder:"write a imgUrl"}),i.a.createElement("span",null,o),i.a.createElement("div",null,"imdbUrl"),i.a.createElement("input",{value:n,type:"text",name:"imdbUrl",onChange:this.handleChange,placeholder:"write a imdbUrl"}),i.a.createElement("span",null,c),i.a.createElement("div",null,"imdbId"),i.a.createElement("input",{value:l,type:"text",name:"imdbId",onChange:this.handleChange,placeholder:"write a imdbId"}),i.a.createElement("span",null,s),i.a.createElement("div",null),i.a.createElement("button",{type:"submit"},"Add movie")))}}]),a}(r.Component),b=a(8),v=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,i=new Array(r),n=0;n<r;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={movies:b},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(m.a)(e),[t])}}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.movies;return i.a.createElement("div",{className:"page"},i.a.createElement("div",{className:"page-content"},i.a.createElement(u,{movies:e})),i.a.createElement("div",{className:"sidebar"},i.a.createElement(g,{addMovie:this.addMovie})))}}]),a}(r.Component);l.a.render(i.a.createElement(v,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.3958d374.chunk.js.map