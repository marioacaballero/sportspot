import * as React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Padding, FontSize, Color, FontFamily, Border } from '../GlobalStyles'

const Calendar = ({ onClose }) => {
  return (
    <View style={styles.calendar}>
      <View style={[styles.calendar1, styles.captionFlexBox]}>
        <View style={[styles.caption, styles.week4FlexBox]}>
          <View style={[styles.month, styles.yearSpaceBlock]}>
            <Text style={styles.january}>Enero</Text>
          </View>
          <View style={[styles.year, styles.yearSpaceBlock]}>
            <Text style={styles.january}>2023</Text>
          </View>
        </View>
        <View>
          <View style={[styles.weekdays, styles.week4FlexBox]}>
            <View style={[styles.weekday, styles.weekdayFlexBox]}>
              <Text style={[styles.mon, styles.digitTypo]}>L</Text>
            </View>
            <View style={[styles.weekday1, styles.weekdaySpaceBlock]}>
              <Text style={[styles.mon, styles.digitTypo]}>M</Text>
            </View>
            <View style={[styles.weekday2, styles.weekdayFlexBox]}>
              <Text style={[styles.mon, styles.digitTypo]}>M</Text>
            </View>
            <View style={[styles.weekday1, styles.weekdaySpaceBlock]}>
              <Text style={[styles.mon, styles.digitTypo]}>J</Text>
            </View>
            <View style={styles.weekdaySpaceBlock}>
              <Text style={[styles.mon, styles.digitTypo]}>V</Text>
            </View>
            <View style={[styles.weekday1, styles.weekdaySpaceBlock]}>
              <Text style={[styles.sat, styles.satTypo]}>S</Text>
            </View>
            <View style={[styles.weekday1, styles.weekdaySpaceBlock]}>
              <Text style={[styles.sat, styles.satTypo]}>D</Text>
            </View>
          </View>
          <Image
            style={styles.separatorIcon}
            contentFit="cover"
            source={require('../assets/separator.png')}
          />
          <View style={[styles.week, styles.weekFlexBox]}>
            <View style={[styles.day, styles.daySpaceBlock]}>
              <Text style={[styles.digit, styles.digitTypo]}>1</Text>
            </View>
            <View style={[styles.day, styles.daySpaceBlock]}>
              <Text style={[styles.digit, styles.digitTypo]}>1</Text>
            </View>
            <View style={[styles.day, styles.daySpaceBlock]}>
              <Text style={[styles.digit, styles.digitTypo]}>1</Text>
            </View>
            <View style={[styles.day, styles.daySpaceBlock]}>
              <Text style={[styles.digit, styles.digitTypo]}>1</Text>
            </View>
            <View style={[styles.day, styles.daySpaceBlock]}>
              <Text style={[styles.digit, styles.digitTypo]}>1</Text>
            </View>
            <View style={[styles.day, styles.daySpaceBlock]}>
              <Text style={[styles.digit, styles.digitTypo]}>1</Text>
            </View>
            <View style={styles.daySpaceBlock}>
              <Text style={styles.satTypo}>1</Text>
            </View>
          </View>
          <View style={[styles.week1, styles.weekFlexBox]}>
            <View style={styles.daySpaceBlock}>
              <Text style={[styles.digit7, styles.digitTypo]}>2</Text>
            </View>
            <View style={styles.daySpaceBlock}>
              <Text style={[styles.digit7, styles.digitTypo]}>3</Text>
            </View>
            <View style={styles.daySpaceBlock}>
              <Text style={[styles.digit7, styles.digitTypo]}>4</Text>
            </View>
            <View style={styles.daySpaceBlock}>
              <Text style={[styles.digit7, styles.digitTypo]}>5</Text>
            </View>
            <View style={styles.daySpaceBlock}>
              <Text style={[styles.digit7, styles.digitTypo]}>6</Text>
            </View>
            <View style={styles.daySpaceBlock}>
              <Text style={styles.satTypo}>7</Text>
            </View>
            <View style={styles.daySpaceBlock}>
              <Text style={styles.satTypo}>8</Text>
            </View>
          </View>
          <View style={[styles.weekdays, styles.week4FlexBox]}>
            <View style={styles.day14}>
              <Text style={[styles.digit14, styles.digitTypo]}>9</Text>
            </View>
            <View style={styles.day14}>
              <Text style={[styles.digit14, styles.digitTypo]}>10</Text>
            </View>
            <View style={styles.day14}>
              <Text style={[styles.digit14, styles.digitTypo]}>11</Text>
            </View>
            <View style={styles.dayLayout}>
              <Text style={[styles.digit7, styles.digitTypo]}>12</Text>
            </View>
            <View style={styles.daySpaceBlock}>
              <Text style={[styles.digit7, styles.digitTypo]}>13</Text>
            </View>
            <View style={styles.daySpaceBlock}>
              <Text style={styles.satTypo}>14</Text>
            </View>
            <View style={styles.daySpaceBlock}>
              <Text style={styles.satTypo}>15</Text>
            </View>
          </View>
          <View style={[styles.weekdays, styles.week4FlexBox]}>
            <View style={styles.daySpaceBlock}>
              <Text style={[styles.digit7, styles.digitTypo]}>16</Text>
            </View>
            <View style={styles.daySpaceBlock}>
              <Text style={[styles.digit7, styles.digitTypo]}>17</Text>
            </View>
            <View style={styles.daySpaceBlock}>
              <Text style={[styles.digit7, styles.digitTypo]}>18</Text>
            </View>
            <View style={styles.daySpaceBlock}>
              <Text style={[styles.digit7, styles.digitTypo]}>19</Text>
            </View>
            <View style={styles.daySpaceBlock}>
              <Text style={[styles.digit7, styles.digitTypo]}>20</Text>
            </View>
            <View style={styles.daySpaceBlock}>
              <Text style={styles.satTypo}>21</Text>
            </View>
            <View style={[styles.day27, styles.dayLayout]}>
              <Text style={[styles.digit27, styles.digit27Clr]}>18</Text>
            </View>
          </View>
          <View style={styles.week4FlexBox}>
            <View style={styles.daySpaceBlock}>
              <Text style={styles.satTypo}>23</Text>
            </View>
            <View style={styles.daySpaceBlock}>
              <Text style={styles.satTypo}>24</Text>
            </View>
            <View style={styles.daySpaceBlock}>
              <Text style={styles.satTypo}>25</Text>
            </View>
            <View style={styles.daySpaceBlock}>
              <Text style={styles.satTypo}>26</Text>
            </View>
            <View style={styles.daySpaceBlock}>
              <Text style={[styles.digit7, styles.digitTypo]}>27</Text>
            </View>
            <View style={styles.daySpaceBlock}>
              <Text style={styles.satTypo}>28</Text>
            </View>
            <View style={styles.daySpaceBlock}>
              <Text style={styles.satTypo}>29</Text>
            </View>
          </View>
          <View style={styles.week4FlexBox}>
            <View style={styles.daySpaceBlock}>
              <Text style={[styles.digit7, styles.digitTypo]}>30</Text>
            </View>
            <View style={styles.daySpaceBlock}>
              <Text style={[styles.digit7, styles.digitTypo]}>31</Text>
            </View>
            <View style={[styles.day, styles.daySpaceBlock]}>
              <Text style={[styles.digit37, styles.digitTypo]}>31</Text>
            </View>
            <View style={[styles.day, styles.daySpaceBlock]}>
              <Text style={[styles.digit37, styles.digitTypo]}>31</Text>
            </View>
            <View style={[styles.day, styles.daySpaceBlock]}>
              <Text style={[styles.digit37, styles.digitTypo]}>31</Text>
            </View>
            <View style={[styles.day, styles.daySpaceBlock]}>
              <Text style={[styles.digit37, styles.digitTypo]}>31</Text>
            </View>
            <View style={[styles.day, styles.daySpaceBlock]}>
              <Text style={[styles.digit37, styles.digitTypo]}>31</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.helloAshfakWrapper, styles.captionFlexBox]}>
        <Text style={[styles.helloAshfak, styles.digit27Clr]}>Listo</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  captionFlexBox: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  week4FlexBox: {
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  yearSpaceBlock: {
    paddingVertical: Padding.p_9xs,
    flexDirection: 'row'
  },
  weekdayFlexBox: {
    paddingVertical: Padding.p_xs,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
  digitTypo: {
    lineHeight: 24,
    fontSize: FontSize.size_lg,
    textAlign: 'center',
    fontFamily: FontFamily.interSemiBold,
    fontWeight: '600'
  },
  weekdaySpaceBlock: {
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_xs,
    justifyContent: 'center',
    alignItems: 'center'
  },
  satTypo: {
    color: Color.sportsNaranja,
    lineHeight: 24,
    fontSize: FontSize.size_lg,
    textAlign: 'center',
    fontFamily: FontFamily.inputPlaceholder
  },

  weekFlexBox: {
    opacity: 0.35,
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  daySpaceBlock: {
    paddingHorizontal: Padding.p_xl,
    height: 48,
    paddingVertical: Padding.p_xs,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
  digitTypo: {
    fontFamily: FontFamily.inputPlaceholder,
    lineHeight: 24,
    fontSize: FontSize.size_lg,
    textAlign: 'center'
  },
  dayLayout: {
    borderRadius: Border.br_5xl,
    height: 48,
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_xs,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
  digit27Clr: {
    color: Color.blanco,
    fontFamily: FontFamily.inputPlaceholder
  },

  january: {
    fontSize: FontSize.size_xl,
    lineHeight: 32,
    textAlign: 'center',
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder,

    fontWeight: '600',
    color: Color.sportsVioleta
  },
  month: {
    paddingHorizontal: Padding.p_5xs
  },
  year: {
    paddingHorizontal: 0
  },
  caption: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  mon: {
    color: Color.sportsVioleta,
    lineHeight: 24,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '600'
  },
  weekday: {
    paddingHorizontal: Padding.p_mid
  },
  weekday1: {
    width: 48,
    paddingHorizontal: Padding.p_lgi
  },
  weekday2: {
    paddingHorizontal: Padding.p_base
  },
  sat: {
    fontWeight: '600'
  },
  weekdays: {
    justifyContent: 'center'
  },
  separatorIcon: {
    overflow: 'hidden',
    width: '100%',
    alignSelf: 'stretch',
    maxHeight: '100%',
    maxWidth: '100%'
  },
  digit: {
    color: Color.colorTomato_100,
    fontFamily: FontFamily.inputPlaceholder,
    lineHeight: 24,
    fontSize: FontSize.size_lg
  },
  day: {
    display: 'none'
  },
  digit6: {
    color: Color.sportsNaranja
  },
  week: {
    justifyContent: 'flex-end'
  },
  digit7: {
    color: Color.sportsVioleta,
    lineHeight: 24,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.inputPlaceholder
  },
  week1: {
    justifyContent: 'center'
  },
  digit14: {
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.inputPlaceholder
  },
  day14: {
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_xs,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
  digit27: {},
  day27: {},
  digit37: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.inputPlaceholder,
    lineHeight: 24,
    fontSize: FontSize.size_lg
  },
  calendar1: {
    borderRadius: Border.br_base,
    padding: Padding.p_5xs,
    justifyContent: 'center',
    backgroundColor: Color.blanco,
    alignItems: 'center'
  },
  helloAshfak: {
    fontSize: FontSize.inputPlaceholder_size,
    fontWeight: '700',
    fontFamily: FontFamily.interBold,
    textAlign: 'left',
    color: Color.blanco
  },
  helloAshfakWrapper: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.sportsNaranja,
    width: 320,
    height: 42,
    marginTop: 14,
    justifyContent: 'center'
  },
  calendar: {
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_xl,
    maxHeight: '100%',
    maxWidth: '100%',
    alignItems: 'center',
    backgroundColor: Color.blanco
  }
})

export default Calendar
