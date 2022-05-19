import React, { useState, useRef } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    TextInput,
    Modal,
} from 'react-native';
import { Colors, Shadow } from '@styles';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Icon, Formulario } from '@components';

const Main = () => {
    const { width } = Dimensions.get('window');
    const styles = stylesheet();
    const carouselRef = useRef();
    const [ modalVisible, setModalVisible ] = useState(false);
    function applyLetterSpacing(string, count = 1) {
        return string.split('').join('\u200A'.repeat(count));
    }

    const carouselImages = [
        {
            image: require('@assets/images/slide-img1.jpg'),
            title: 'Adipiscing id orci neque,\nid scelerisque',
            description: 'Vestibulum enim in',
            year: '2020'
        }, 
        {
            image: require('@assets/images/slide-img2.jpg'),
            title: 'Dignissim cras enim,\ntincidunt quis nec nisl',
            description: 'Vestibulum enim in',
            year: '2020'
        }, 
        {
            image: require('@assets/images/slide-img3.jpg'),
            title: 'Elit id viverra quam magna\nelit',
            description: 'Vestibulum enim in',
            year: '2020'
        }, 
        {
            image: require('@assets/images/slide-img4.jpg'),
            title: 'Adipiscing id orci neque,\nid scelerisque',
            description: 'Vestibulum enim in',
            year: '2020'
        }, 
        {
            image: require('@assets/images/slide-img5.jpg'),
            title: 'Dignissim cras enim,\ntincidunt quis nec nisl',
            description: 'Vestibulum enim in',
            year: '2020'
        } 
    ];

    const carouselCardItems = ({item, index}) => {
        return (
            <View style={styles.container} key={index}>
                <Image source={item.image} style={styles.cardImage} />
                <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={[styles.title, {fontSize: 24, textAlign: 'left'}]}>{item.title}</Text>
                    <Icon name="fa-caret-right" color={Colors.blue} style={{fontSize: 26, marginStart: 5}} />
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon name="fa-calendar" color={Colors.blue} style={{fontSize: 20, marginEnd: 5,}} />
                        <Text style={styles.cardDescription}>{item.description}</Text>
                    </View>
                    <View style={styles.yearContainer}>
                        <Text style={[styles.title, {fontSize: 24, fontWeight: '600'}]} >{item.year}</Text>
                    </View>
                </View>
                <View style={styles.seperator} />
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Image source={require('@assets/images/Logo.png')} style={styles.logo} resizeMode="cover"/>
                <View style={styles.imgContainer}>
                    <Image source={require('@assets/images/img-video.jpg')} style={styles.imgVideo}  />
                    <Image source={require('@assets/images/btn-play.png')} style={styles.imgBtnPlay}  />
                </View>
                <Text style={styles.title}>Lorem ipsum dolor{"\n"}sit amet,{"\n"}consectetur{"\n"}adipiscing.</Text>
                <Text style={styles.description}>Aliquam malesuada integer{"\n"}bibendum mauris massa{"\n"}facilisi. Eu mi venenatis{"\n"}congue mattis pellentesque{"\n"}quis feugiat scelerisque.</Text>
                <Pressable style={[styles.contacto,{flexDirection: 'row', alignItems: 'center'}]} onPress={() => setModalVisible(true)} >
                    <Text style={styles.contactoText}>{applyLetterSpacing('CONTACTO')}</Text>
                    <Icon name="fa-share" color={Colors.black} style={{fontSize: 20, marginStart: 5,}} />
                </Pressable>
                <Text style={[styles.title, {fontSize: 30, marginTop: 50, marginBottom: 20}]}>Vel sagittis faucibus{"\n"}neque</Text>
                <View>     
                    <Carousel 
                        ref={carouselRef}
                        layout="default"    
                        data={carouselImages}
                        renderItem={carouselCardItems}
                        sliderWidth={width}
                        itemWidth={350}
                        loop={true}
                    />
                    <Pressable style={styles.leftArrow} onPress={() => carouselRef.current.snapToPrev()}>
                        <Icon name="fa-chevron-left" color={Colors.blue} style={styles.arrowText} />
                    </Pressable>
                    <Pressable style={styles.rightArrow} onPress={() => carouselRef.current.snapToNext()}>
                        <Icon name="fa-chevron-right" color={Colors.blue} style={styles.arrowText} />
                    </Pressable>
                </View>
                <Image source={require('@assets/images/img-sect2.png')}  style={[styles.imgVideo, {marginVertical: 40}]}/>
                <Text style={styles.mintTitle}>OVERLINE</Text>
                <Text style={[styles.title, {textAlign: 'left', marginStart: 10}]}>Mattis enim{"\n"}habitant massa,{"\n"}magnis{"\n"}pellentesque</Text>
                <Text style={styles.description2}>Ut amet vulputate faucibus vitae{"\n"}semper eget auctor. Diam tempor{"\n"}pulvinar ultricies dolor feugiat{"\n"}aliquam commodo.</Text>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={styles.description2}>Nisi sollicitudin commodo duis{"\n"}integer.</Text>
                    <Icon name="fa-caret-down" color={Colors.black} style={{fontSize: 26, marginStart: 5, marginEnd: 10}} />
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    
                    <Text style={styles.description2}>Sed pellentesque id quam{"\n"}rhoncus, praesent massa{"\n"}iaculis.</Text>
                    <Icon name="fa-caret-up" color={Colors.black} style={{fontSize: 26, marginStart: 5, marginEnd: 10}} />
                </View>
                <Text style={styles.description2}>Nibh arcu, enim, sit purus.{"\n"}Vulputate massa sagittis donec{"\n"}magna libero mi odio amet.{"\n"}Adipiscing convallis lectus tortor{"\n"}pretium mattis malesuada{"\n"}scelerisque sagittis ultricies.</Text>
                <Pressable style={styles.contacto} >
                    <Text style={styles.contactoText}>{applyLetterSpacing('COMENZAR')}</Text>
                </Pressable>
                <Pressable style={styles.conocerMas} >
                    <Text style={styles.contactoText}>{applyLetterSpacing('CONOCER MÁS')}</Text>
                </Pressable>
                <View style={styles.blueContainer}>
                    <Text style={[styles.title, {color: Colors.white, marginTop: 50}]}>Porttitor imperdiet{"\n"}congue eu vel{"\n"}scelerisque quis{"\n"}enim, egestas sed ut.</Text>
                    <Text style={[styles.description, {fontSize: 22, color: Colors.white, marginTop: 20}]}>Ut elementum pellentesque tellus{"\n"}ornare a pellentesque. Sollicitudin{"\n"}in orci proin et mauris neque.{"\n"}Habitant sit vel malesuada eros.</Text>
                    <TextInput
                        style={styles.emailInput}
                        placeholderTextColor={Colors.lightgrey}
                        placeholder='Email'
                    />
                    <Pressable style={[styles.contacto, {alignSelf: 'center', width: 220, marginTop: 0, marginStart: 0}]} >
                        <Text style={styles.contactoText}>{applyLetterSpacing('SUSCRIBIRSE')}</Text>
                    </Pressable>
                    <Image source={require('@assets/images/Logo-1.png')} style={styles.logo1} />
                    <Text style={[styles.description, {color: Colors.white, fontSize: 20}]}>Elit et sed mauris, eu scelerisque id.{"\n"}Viverra dui diam ultrices malesuada{"\n"}scelerisque.</Text>
                    <View style={styles.socialIcons}>
                        <View style={styles.socialIconContainer}>
                            <Icon name="fa-facebook" style={styles.socialIcon} />
                        </View>
                        <View style={styles.socialIconContainer}>
                            <Icon name="fa-twitter" style={styles.socialIcon} />
                        </View>
                        <View style={styles.socialIconContainer}>
                            <Icon name="fa-linkedin" style={styles.socialIcon} />
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 40}}>
                        <View>
                            <Text style={styles.footerTitle}>Ubicación</Text>
                            <Text style={styles.footerBody}>America</Text>
                            <Text style={styles.footerBody}>Asia</Text>
                            <Text style={styles.footerBody}>Europa</Text>
                        </View>
                        <View>
                            <Text style={styles.footerTitle}>Contacto</Text>
                            <Text style={styles.footerBody}>Nosotros</Text>
                            <Text style={styles.footerBody}>Equipo</Text>
                            <Text style={styles.footerBody}>Historia</Text>
                        </View>
                    </View>
                    <View style={{marginTop: 40}}>
                        <Text style={styles.footerTitle}>Legales</Text>
                        <Text style={styles.footerBody}>Política de Privacidad</Text>
                        <Text style={styles.footerBody}>Términos y Condiciones</Text>
                        <Text style={styles.footerBody}>Responsiva</Text>
                    </View>
                    <Text style={[styles.footerBody,{fontSize: 20, color: Colors.white, marginBottom: 40}]}>2022 Flow® los derechos reservados</Text>
                </View>
            </ScrollView>
            <Formulario visible={modalVisible} onDismiss={() => setModalVisible(false)} />
        </SafeAreaView>
    );
};

const stylesheet = () => StyleSheet.create({
    container:{
        flex: 1,
    },
    imgContainer:{
        marginVertical: 15,
        width: '100%',
        alignContent: 'center',
        justifyContent: 'center',
    },  
    logo:{
        margin: 20
    },
    logo1:{
        padding: 10, 
        margin: 20,
        alignSelf: 'center',
        resizeMode: 'cover',
    },
    imgVideo:{
        width: '90%',
        height: 300,
        borderRadius: 200,
        alignSelf: 'center',
        resizeMode: 'cover'
    },
    imgBtnPlay:{
        width: 150,
        position: 'absolute', 
        top: '22%',
        left: '30%',
        resizeMode: 'contain'
    },
    title:{
        color: Colors.black,
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    description:{
        marginTop: 10,
        color: Colors.black,
        fontSize: 26,
        textAlign: 'center',
    },
    description2:{
        marginTop: 10,
        color: Colors.black,
        fontSize: 22,
        textAlign: 'left',
        marginBottom: 10,
        marginStart: 10,
    },
    contacto:{
        ...Shadow,
        marginVertical: 15,
        marginStart: 20,
        backgroundColor: Colors.mint,
        borderRadius: 25,
        width: 180,
        height: 55,
        alignContent: 'center',
        justifyContent: 'center',
    },
    conocerMas:{
        marginVertical: 15,
        marginStart: 20,
        borderColor: Colors.mint,
        backgroundColor: Colors.white,
        borderRadius: 25,
        borderWidth: 2,
        width: 220,
        height: 55,
        alignContent: 'center',
        justifyContent: 'center',
    },
    contactoText:{
        fontSize: 20, 
        textAlign: 'center', 
        color: Colors.black,
        fontWeight: 'bold',
    },
    cardImage:{
        marginHorizontal: 10,
        width: 350,
        height: 300,
        borderRadius: 30,
        resizeMode: 'cover',
        alignSelf: 'center',
    },
    cardDescription:{
        fontSize: 20,
        fontWeight: '300',
        color: Colors.black,
    },
    yearContainer:{
        width: 80,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: Colors.yearBackground,
    },
    seperator:{
        width: 350, 
        height: 2, 
        backgroundColor: Colors.lightgrey,
        marginVertical: 10
    },
    leftArrow:{
        ...Shadow,
        alignContent: 'center',
        justifyContent: 'center',
        height: 65,
        width: 65,
        borderRadius: 100,
        backgroundColor: Colors.white,
        position: 'absolute',
        left: 20,
        top: -30

    },
    rightArrow:{
        ...Shadow,
        alignContent: 'center',
        justifyContent: 'center',
        height: 65,
        width: 65,
        borderRadius: 100,
        backgroundColor: Colors.white,
        position: 'absolute',
        right: 20,
        top: -30

    },
    arrowText:{
        textAlign: 'center',
        fontSize: 20,
    },
    mintTitle:{
        margin: 10,
        color: Colors.mint,
        fontSize: 24
    },
    blueContainer:{
        marginTop: 50,
        backgroundColor: Colors.blue,
        borderTopLeftRadius: 130,
        borderTopRightRadius: 40,
    },
    emailInput:{
        marginTop: 50,
        borderColor: Colors.lightgrey,
        borderWidth: 1,
        color: Colors.lightgrey,
        marginVertical: 15,
        borderRadius: 25,
        borderWidth: 1.5,
        fontSize: 20,
        width: 220,
        height: 55,
        paddingStart: 20,
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    socialIcons:{
        marginHorizontal: 50,
        marginVertical:20,
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center'
    },  
    socialIconContainer:{
        width: 60,
        height: 60,
        backgroundColor: Colors.lightgrey2,
        borderRadius: 50,
    },
    footerTitle:{
        color: Colors.white,
        fontSize: 26,
        fontWeight: '600',
        textAlign: 'center',
    },
    footerBody:{
        marginTop: 25,
        color: Colors.footerBlue,
        fontSize: 24,
        textAlign: 'center',
    },
    socialIcon:{
        alignSelf: 'center',
        fontSize: 34,
        marginTop: 13
    }
    
});

export default Main;
