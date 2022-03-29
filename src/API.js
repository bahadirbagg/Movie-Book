export const BACKDROP_PATH = 'https://image.tmdb.org/t/p/original';
export const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';
export const POPULAR_MOVIES = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4eb490f3e0e767726c90fddf79671fa1';



var date = new Date();

	var d = date.getDate();
	var m = date.getMonth() + 1;
	var y = date.getFullYear();
    var nextm = date.getMonth() + 2;
    var lastm = date.getMonth() -1 ;
    var dateString = y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
	var nextMonth = y + '-' + (nextm <= 9 ? '0' + nextm : nextm) + '-' + (d <= 9 ? '0' + d : d);
    var lastMonth = y + '-' + (lastm <= 9 ? '0' + lastm : lastm) + '-' + (d <= 9 ? '0' + d : d);

    
export const MOVIES_ON_CINEMA = `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${lastMonth}&primary_release_date.lte=${dateString}&api_key=4eb490f3e0e767726c90fddf79671fa1`;
export const UPCOMING_MOVIES = `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${dateString}&primary_release_date.lte=${nextMonth}&api_key=4eb490f3e0e767726c90fddf79671fa1`;