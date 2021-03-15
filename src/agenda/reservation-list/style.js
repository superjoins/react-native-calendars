import {StyleSheet} from 'react-native';
import * as defaultStyle from '../../style';

const STYLESHEET_ID = 'stylesheet.agenda.list';

export default function styleConstructor(theme = {}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    container: {
      flexDirection: 'row'
    },
    innerContainer: {
      flex: 1
    },
    dayNum: {
      fontSize: appStyle.agendaDayNumFontSize,
      // fontWeight: '200',
      lineHeight: 29,
      fontFamily: appStyle.textDayFontFamily,
      color: appStyle.agendaDayNumColor
    },
    dayText: {
      fontSize: 14,
      fontWeight: appStyle.textDayFontWeight,
      fontFamily: appStyle.textDayFontFamily,
      color: appStyle.agendaDayTextColor,
      backgroundColor: 'rgba(0,0,0,0)',
      marginTop: -5
    },
    day: {
      width: 63,
      alignItems: 'center',
      justifyContent: 'center'
      // marginTop: 32
    },
    today: {
      color: appStyle.agendaTodayColor
    },
    indicator: {
      marginTop: 80
    },
    divider: {
      borderBottomWidth: 1,
      borderColor: '#f0f0f0'
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
