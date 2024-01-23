import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'

const Signup = () => {
  return (
    <View style={styles.Frame1547755958}>
      <Text style={styles.BienvenidoA}>Bienvenido/a</Text>
      <View style={styles.Frame1547755956}>
        <View style={styles.Frame1547755953}>
          <Text style={styles.IniciarSesiNConGoogl}>
            Iniciar sesión con Google
          </Text>
        </View>
        <View style={styles.Frame1547755954}>
          <Text style={styles.IniciarSesiNConApple}>
            Iniciar sesión con Apple
          </Text>
        </View>
        <View style={styles.Frame1547755955}>
          <Text style={styles.IniciarSesiNSinRegis}>
            Iniciar sesión sin registro
          </Text>
        </View>
      </View>
      <View style={styles.Frame1029}>
        <Text style={styles.TypeSqlInjection}>Idioma</Text>
        <Image
          style={styles.Frame1013}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/oyu5qp80czl-1563%3A26506?alt=media&token=84b1467a-b356-41f7-b22d-6670562269be'
          }}
        />
      </View>
      <View style={styles.Frame1028}>
        <View style={styles.Frame596}>
          <View style={styles.Frame591}>
            <View style={styles.Frame750}>
              <Image
                style={styles.Frame1022}
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/8s1hb8m7xa9-1563%3A26492?alt=media&token=723ca882-57ca-42fc-9d10-ce8a9ffebe57'
                }}
              />
              <Text style={styles.Es}>ES</Text>
            </View>
            <View style={styles.Frame751}>
              <Text style={styles.En}>EN</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Frame1547755958: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 318,
    height: 242,
    boxSizing: 'border-box'
  },
  BienvenidoA: {
    marginRight: 9,
    color: 'rgba(242,89,16,1)',
    fontSize: 40,
    lineHeight: 40,
    fontFamily: 'Inter',
    fontWeight: '700',
    letterSpacing: 1.6
  },
  Frame1547755956: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    height: 185,
    boxSizing: 'border-box',
    marginVertical: 20
  },
  Frame1547755953: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 55,
    marginRight: 10,
    marginVertical: 10,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 50,
    boxSizing: 'border-box',
    backgroundColor: 'rgba(226,220,236,1)',

    Frame1547755953: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: 55,
      marginRight: 10,
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 12,
      paddingBottom: 12,
      borderRadius: 50,
      boxSizing: 'border-box',
      backgroundColor: 'rgba(226,220,236,1)'
    }
  },
  IniciarSesiNConGoogl: {
    color: 'rgba(64,3,111,1)',
    fontSize: 18, // Eliminé la unidad "px"
    lineHeight: 18, // Eliminé la unidad "px"
    fontFamily: 'Inter', // Mantuve la propiedad fontFamily
    fontWeight: '700' // Mantuve la propiedad fontWeight
  },
  Frame1547755954: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 55,
    marginRight: 10,
    marginVertical: 10,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 50,
    boxSizing: 'border-box',
    backgroundColor: 'rgba(226,220,236,1)'
  },
  IniciarSesiNConApple: {
    color: 'rgba(64,3,111,1)',
    fontSize: 18, // Eliminé la unidad "px"
    lineHeight: 18, // Eliminé la unidad "px"
    fontFamily: 'Inter', // Mantuve la propiedad fontFamily
    fontWeight: '700' // Mantuve la propiedad fontWeight
  },
  Frame1547755955: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 55,
    paddingLeft: 30,
    paddingRight: 30,
    marginVertical: 10,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 50,
    boxSizing: 'border-box',
    backgroundColor: 'rgba(226,220,236,1)'
  },
  IniciarSesiNSinRegis: {
    color: 'rgba(64,3,111,1)',
    fontSize: 18, // Eliminé la unidad "px"
    lineHeight: 18, // Eliminé la unidad "px"
    fontFamily: 'Inter', // Mantuve la propiedad fontFamily
    fontWeight: '700' // Mantuve la propiedad fontWeight
  },
  Frame1029: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 74,
    height: 32,
    paddingLeft: 8,
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 12,
    marginTop: 30,
    borderRadius: 8,
    boxSizing: 'border-box',
    backgroundColor: 'rgba(226,220,236,1)'
  },
  TypeSqlInjection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginRight: 60,
    color: 'rgba(84,89,94,1)',
    fontSize: 13, // Eliminé la unidad "px"
    lineHeight: 13, // Eliminé la unidad "px"
    fontFamily: 'Inter', // Mantuve la propiedad fontFamily
    fontWeight: '500', // Mantuve la propiedad fontWeight
    textAlign: 'right'
  },
  Frame1013: {
    width: 24,
    height: 24
  },
  Frame1028: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: 100,
    height: 86,
    borderWidth: 1,
    borderColor: 'rgba(222,226,230,1)',
    borderRadius: 8,
    boxSizing: 'border-box',
    backgroundColor: 'rgba(226,220,236,1)'
  },
  Frame596: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box'
  },
  Frame591: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    height: '100%',
    borderRadius: 10,
    boxSizing: 'border-box'
  },
  Frame750: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    paddingLeft: 22,
    paddingRight: 22,
    paddingTop: 10,
    paddingBottom: 10,
    boxSizing: 'border-box',
    backgroundColor: 'rgba(226,220,236,1)'
  },
  Frame1022: {
    width: 18,
    height: '100%',
    marginRight: 10
  },
  Es: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: 'rgba(244,67,54,1)'
    // fontSize: "16px",
    // lineHeight: "16px",
    // fontFamily: "Inter, sans-serif",
    // fontWeight: "500",
    // textAlign: "center",
  },
  Frame751: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    paddingLeft: 22,
    paddingRight: 22,
    paddingTop: 10,
    paddingBottom: 10,
    boxSizing: 'border-box',
    backgroundColor: 'rgba(243,233,238,1)'
  },
  En: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: 'rgba(84,89,94,1)'
    // fontSize: "16px",
    // lineHeight: "16px",
    // fontFamily: "Inter, sans-serif",
    // fontWeight: "500",
    // textAlign: "center",
  }
})

export default Signup
