import * as React from 'react';

export let navigation = null
export let currentScreenName = null
export let prevScreenName = null

export function navigate(name, params = {}) {
  prevScreenName = currentScreenName
  navigation?.navigate(name, params);
  currentScreenName = name
}

export function replace(name, params = {}) {
  prevScreenName = currentScreenName
  navigation?.replace(name, params);
  currentScreenName = name
}
export function goBack() {
  navigation?.navigate(prevScreenName);
  currentScreenName = prevScreenName
}

export function navigateToLogin(){
  if(currentScreenName === 'Login') return

  navigate('Profile')
  navigate('Login')
}

export const setNavigation = (nav) => navigation = nav