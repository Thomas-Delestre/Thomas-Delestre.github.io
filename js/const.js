export const apiGraphQLUrl = "https://zone01normandie.org/api/graphql-engine/v1/graphql";
export const ApiSignin = "https://zone01normandie.org/api/auth/signin";
export let content_type = { "Content-Type": "application/json" };
export let param = {
    method: "POST",
    headers: content_type,
  };

export let user_info = {
  query: `
  {
      user{
        id
        login
        totalUp
        totalDown
        auditRatio
        firstName
        lastName
        campus
        email
        attrs
        events(where: {event: {path: {_ilike: "/rouen/div-01"}}})  {
          level
         }
        xps {
          event {
            id
            createdAt
            status
            endAt
            parentId
           }
          amount
          path
         }
       }
       transaction(where: {type: {_eq: "xp"} event: {path: {_ilike: "/rouen/div-01"}}}, order_by: {id: asc}) {
        amount
        createdAt
      }
    }`,
}

export var alertMainPage = document.getElementById("alert_main_page");
