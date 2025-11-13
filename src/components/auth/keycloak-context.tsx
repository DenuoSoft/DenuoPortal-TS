import { createContext, useContext } from 'react';
import { AuthContextValue } from '../../models/keycloak';

export const KeycloakContext = createContext<AuthContextValue | null>(null);

export const useKeycloak = () => {
  const context = useContext(KeycloakContext);
  if (!context) {
    throw new Error("useKeycloak must be used within a KeycloakProvider");
  }
  return context;
};