import * as React from 'react';

export let navigation = null
export let currentScreenName = null

export function navigate(name, params = {}) {
  navigation?.navigate(name, params);
  console.log(name)
  currentScreenName = name
}

export function replace(name, params = {}) {
  navigation?.replace(name, params);
  console.log(name)
  currentScreenName = name
}

export function navigateToLogin(){
  if(currentScreenName === 'Login') return

  navigate('Profile', {status: 403})
  replace('Login', {status: 403})
}

export const setNavigation = (nav) => navigation = nav