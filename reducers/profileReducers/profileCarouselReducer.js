import {getLocaledString} from "../../lib/locale/locale";

export const profileCarouselSlideTitle = (state = null, action) => {
    if (action.type === 'PROFILE_CAROUSEL/CHANGE_SLIDE') {

        switch (action.payload.index) {
            //TODO locale string
            case 0:
                return getLocaledString('profile_carousel_title_1') //getLocaledString('profile__carousel', 'profile_carousel_title_1')
            case 1:
                return getLocaledString('profile_carousel_title_2') //getLocaledString('profile__carousel', 'profile_carousel_title_2')
        }
    }
    return getLocaledString('profile_carousel_title_1')
}
