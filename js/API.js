import {get} from 'jquery';

import {post} from 'jquery';

import ServerActions from "./actions/ServerActions";

let API = {
    
    // fetchLinks() {
    //     console.log('1. in API');
    //     // AJAX requet
    //     get('/data/links').done(resp => {
    //         //console.log(resp);
    //         
    //         ServerActions.receivedLinks(resp);
    //     });
    // }
    
    fetchLinks() {
        console.log('1. in graphql');
        // AJAX requet
        post('/graphql', {
          query: `{
            links {
              _id,
              title,
              url
            }
          }`
      }).done(resp => {
    //console.log(resp);
            
    ServerActions.receivedLinks(resp.data.links);
});
    }
    
};

export default API;