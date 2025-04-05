import axios from 'axios';

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
 
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3M2IwZTQxODM4NTZhZjA0ZGQ1ZTk3MDdkMjc3MDJhYyIsIm5iZiI6MTcyODU0NzY5My4wMTQwMDAyLCJzdWIiOiI2NzA3OGI2ZDFkOTZkYzZkNDc2YTE1NTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.d8c2Avqog89IzXtYyMylHiSifQysubSaoyOaN8WM8hk'
  }
});
export default instance;

// axios
//   .request(options)
//   .then(res => console.log(res.data))
//   .catch(err => console.error(err));