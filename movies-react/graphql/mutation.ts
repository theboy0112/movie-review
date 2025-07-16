import { gql } from "@apollo/client";

export const LOGIN_CHECK = gql`
  mutation Login($loginCheckInput: LoginCheckInput!) {
    login(loginCheckInput: $loginCheckInput)
  }
`;

export const CREATE_CHECK = gql`
  mutation CreateCheck($createCheckInput: CreateCheckInput!) {
    createCheck(createCheckInput: $createCheckInput) {
      userName
      userPassword
    }
  }
`;
