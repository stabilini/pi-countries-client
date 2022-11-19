// import allCountries from './allCountries.json';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_DETAIL = 'GET_DETAIL';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const SET_PAGE_VIEW = 'SET_PAGE_VIEW';
export const FILTER_ACTIVITY = 'FILTER_ACTIVITY';
export const COUNTRIES_ORDER_ASC = 'COUNTRIES_ORDER_ASC';
export const COUNTRIES_ORDER_DES = 'COUNTRIES_ORDER_DES';
export const COUNTRIES_ORDER_RANDOM = 'COUNTRIES_ORDER_RANDOM';
export const COUNTRIES_FILTER_CONTINENT = 'COUNTRIES_FILTER_CONTINENT';
export const COUNTRIES_FILTER_ACTIVITY = 'COUNTRIES_FILTER_ACTIVITY';
export const SET_THEME = 'SET_THEME';

export const URL = 'https://tasty-button-bull.cyclic.app/';

export const getCountries = (name) => {
  return function(dispatch) {
    return fetch(name ? URL + 'countries?name=' + name : URL + 'countries')
      // .then(() => {
      //     let result = allCountries.map(c => ({
      //       id: c.cca3,
      //       name: c.name.common,
      //       flag: c.flags.png,
      //       continent: c.continents[0],
      //       capital: c.capital ? c.capital[0] : 'n/d',
      //       subregion: c.subregion ? c.subregion : 'n/d',
      //       area: c.area >= 0 ? c.area : 0,
      //       population: c.population >= 0 ? c.population : 0,
      //       activities: []
      //     }))
      //     result[0].activities = [{ name: "Golf" }, { name: "Paseo"}]
      //     result[1].activities = [{ name: "Golf" }]
      //     result[2].activities = [{ name: "Paseo"}]
      //     if (name) return result.filter(f => f.name.includes(name));
      //     return result;
      //   })
      .then(res => res.json())
      .then(obj => obj.map(v => v.activities.length === 0 ? {...v, activities: [{name: 'No activities'}]} : {...v}))
      .then(obj => dispatch({type: GET_COUNTRIES, payload: obj}))
      .catch(error => console.log(error))
  }
};

export const getDetail = (id) => {
  return function(dispatch) {
    return fetch(URL + 'countries/' + id)
      // .then(() => {
      //   let result = allCountries.map(c => ({
      //     id: c.cca3,
      //     name: c.name.common,
      //     flag: c.flags.png,
      //     continent: c.continents[0],
      //     capital: c.capital ? c.capital[0] : 'n/d',
      //     subregion: c.subregion ? c.subregion : 'n/d',
      //     area: c.area >= 0 ? c.area : 0,
      //     population: c.population >= 0 ? c.population : 0,
      //     activities: []
      //   }))
      //   result[0].activities = [{ name: "Golf" }, { name: "Paseo"}]
      //   result[1].activities = [{ name: "Golf" }]
      //   result[2].activities = [{ name: "Paseo"}]
      //   return result.filter(f => f.id === id);
      // })
      .then(res => res.json())
      .then(obj => dispatch({type: GET_DETAIL, payload: obj}))
  }
}

export const getFilterActivities = () => {
  return function(dispatch) {
    return fetch(URL + 'activities')
      .then(res => res.json())
      .then(obj => dispatch({type: FILTER_ACTIVITY, payload: obj}))
  }
}

export const createActivity = (payload) => {
  return function(dispatch) {
    return fetch(URL + 'activities', {
                  method: 'POST',
                  body: JSON.stringify(payload),
                  headers: {'Content-type': 'application/json; charset=UTF-8'}
                })
      .then(res => res.json())
      .then(obj => dispatch({type: CREATE_ACTIVITY, payload: obj}))
      .catch(error => console.log(error))
  }
}

export const orderCountries = (field, order) => {
  return function(dispatch) {
    if (order === 'asc') {
      return dispatch({
        type: COUNTRIES_ORDER_ASC,
        payload: field
      })
    } else if (order === 'desc') {
      return dispatch({
        type: COUNTRIES_ORDER_DES,
        payload: field
      })
    } else {
      return dispatch({
        type: COUNTRIES_ORDER_RANDOM,
        payload: 'random'
      })
    }
  }
}

export const filterBy = (field, data) => {
  return function(dispatch) {
    if (field === 'continent') {
      return dispatch({
        type: COUNTRIES_FILTER_CONTINENT,
        payload: data
      })
    } else {
      return dispatch({
        type: COUNTRIES_FILTER_ACTIVITY,
        payload: data
      })
    }
  }
}

export const setPageView = (page) => {
  return function(dispatch) {
    return dispatch({
      type: SET_PAGE_VIEW,
      payload: page
    })
  }
}

export const setTheme = (theme) => {
  return function(dispatch) {
    return dispatch({
      type: SET_THEME,
      payload: theme
    })
  }
}