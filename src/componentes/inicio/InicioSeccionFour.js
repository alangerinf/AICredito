import React, {Component} from 'react';
import testimonio2 from '../../img/testimonio2.png';
import testimonio3 from '../../img/testimonio3.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../inicio/InicioSeccionFour.css';

class InicioSeccionFour extends Component {
    state= {
        responsive:{
            0: {
                items: 1,
            },
            450: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 3,
            },
        },
    }


  render() {
  	return (
        <div className="container-fluid">
            <div className="row testimonios">
                <div className="col-sm-12">
                    <sub>TESTIMONIOS</sub>
                    <h3 className="titulos-azul">Ellos saben como trabajamos</h3>
                </div>
            <div className="col-sm-12">
            <div className="carousel-testimonios">
                <div className="row" >
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8 text-center">
                    <OwlCarousel className='owl-theme carousel' autoplay items="3" responsive={this.state.responsive} margin={10}  autoHeightClass loop>      
                    <div className='item'>
                        <div className="text-center card-box">
                            <div className="member-card pt-2 pb-2">
                                <div className="thumb-lg member-thumb mx-left"><img className="img-testimonio" src={testimonio2} alt="profile-image" /></div>
                                <div className="contenido-testimonio">
                                    <h4 className="titulo-carousel">Campos Sandoval Terecita</h4>
                                    <span className="dni-testimonio">DNI: 18192879</span>
                                    <p className="texto-testimonio">Muy recomendado, gracias al crédito de AIC pude terminar los acabados de mi cocina, ahora las ventas en mi restaurante han aumentado notablemente.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="text-center card-box">
                            <div className="member-card pt-2 pb-2">
                                <div className="thumb-lg member-thumb mx-left"><img className="img-testimonio" src={testimonio3} alt="profile-image" /></div>
                                <div className="contenido-testimonio">
                                    <h4 className="titulo-carousel">Roldan Rodríguez Angélica María</h4>
                                    <span className="dni-testimonio">DNI: 43470769</span>
                                    <p className="texto-testimonio">Lo mejor de AIC es que nos atendieron rápidamente y sus facilidades de pago han hecho que nos sintiéramos cómodas sin necesidad de salir lejos de casa.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="text-center card-box">
                            <div className="member-card pt-2 pb-2">
                                <div className="thumb-lg member-thumb mx-left"><img className="img-testimonio" src={testimonio2} alt="profile-image" /></div>
                                <div className="contenido-testimonio">
                                    <h4 className="titulo-carousel">Araujo Ruiz Ivette Estrella</h4>
                                    <span className="dni-testimonio">DNI: 75233581</span>
                                    <p className="texto-testimonio">Durante la pandemia la banca tradicional no apostaba por nosotras en otorgarnos un crédito, sin embargo, ahora gracias a los créditos de AIC cada una de nosotras hemos reactivado nuestros negocios.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="text-center card-box">
                            <div className="member-card pt-2 pb-2">
                                <div className="thumb-lg member-thumb mx-left"><img className="img-testimonio" src={testimonio3} alt="profile-image" /></div>
                                <div className="contenido-testimonio">
                                    <h4 className="titulo-carousel">Vásquez Vicuña Gaby Yanina</h4>
                                    <span className="dni-testimonio">DNI: 47554385</span>
                                    <p className="texto-testimonio">Siempre buscamos mejores propuestas de crédito y en AIC encontramos, rapidez de atención, facilidades para el pago y una tasa accesible.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="text-center card-box">
                            <div className="member-card pt-2 pb-2">
                                <div className="thumb-lg member-thumb mx-left"><img className="img-testimonio" src={testimonio2} alt="profile-image" /></div>
                                <div className="contenido-testimonio">
                                    <h4 className="titulo-carousel">Tumbajulca Morillo Liliana Tila</h4>
                                    <span className="dni-testimonio">DNI: 41844363</span>
                                    <p className="texto-testimonio">Cuando me hablaron de integrarme al grupo en AIC, no sabía si integrarme, pero accedí y ahora me siento cómoda con respecto a la rapidez y facilidad de pago ya que viajo con mi mercadería constantemente.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
            </div>
            </div>
        </div>
  	)
  }
 
}
 
export default InicioSeccionFour;