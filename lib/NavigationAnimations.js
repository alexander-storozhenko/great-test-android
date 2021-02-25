export const slideAnimation = {
    headerShown: false,
    cardStack: {
      gesturesEnabled: false,
    },
    cardStyleInterpolator: ({ current, layouts }) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],

              }),
            },
          ],
        },
      };
    },
  };

export const opacityAnimation = {
    headerShown: false,
    cardStack: {
        gesturesEnabled: false,
    },
    cardStyleInterpolator: ({ current, layouts }) => {
        return {
            cardStyle: {
                opacity: current.progress,

            },
        };
    },
};
