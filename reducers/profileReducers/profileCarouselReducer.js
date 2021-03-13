import {getLocaledString} from "../../lib/locale/localeString";

export const profileCarouselSlideTitle = (state = null, action) => {
    if (action.type === 'PROFILE_CAROUSEL/CHANGE_SLIDE') {

        switch (action.payload.index) {
            //TODO locale string
            case 0:
                return "Мои тесты" //getLocaledString('profile__carousel', 'profile_carousel_title_1')
            case 1:
                return "Оцененные тесты" //getLocaledString('profile__carousel', 'profile_carousel_title_2')
        }
    }
    return "Мои тесты"
}
