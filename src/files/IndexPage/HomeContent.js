import '../../css/indexCSS.css';
import cloud_img from '../../images/cloudy.png'
import recycling_img from '../../images/recycling.png'
import connect_img from '../../images/connect.png'
import logo_img from '../../images/short_logo.png'
import pin_img from '../../images/pin.png'

function HomeContent() {
  return (
    <div>
        <section id="top">
            <div class="row container-fluid" style={{margin: 0}}>
                <div class="col-lg-4 text-center">
                    <br/><br/><br/><br/><br/><br/>
                    <img src={cloud_img} alt="cloud-img" height="100px"/>
                </div>
                <div class="col-lg-4 text-center">
                    <img src={logo_img} alt="logo-img" height="200px"/>
                    <h2>Reduce . Reuse . Recycle.</h2>
                </div>
                <div class="col-lg-4 text-center">
                    <img src={cloud_img} alt="cloud-img" height="100px"/>
                    <br/><br/><br/><br/><br/><br/>
                </div>
            </div>
        </section>


        <section id="middle">
            <h2 style={{color: '#11999E'}}>Hello.</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat massa lectus, eget pretium lacus
                porttitor eu.
                Nulla vulputate, lorem quis dictum mollis, tellus nibh volutpat enim, ac sollicitudin dolor neque id
                velit.
                Aenean lacus eros, volutpat ac quam quis, venenatis pellentesque enim. Sed ultrices dolor at imperdiet
                pellentesque.
                Cras faucibus diam massa, nec varius mauris tempor ut. Proin laoreet tempus ante, quis iaculis nunc
                lacinia ac.
                Fusce aliquam ligula vehicula, fermentum ipsum a, gravida nisl. Mauris a rutrum lectus. Duis eget purus
                fringilla,
                congue dolor sed, efficitur lorem.
            </p>
        </section>

        <section id="bottom">
            <div class="row">
                <div class="col-lg-4 text-center">
                    <img src={recycling_img} alt="recycling-img" height="200rem"/>
                </div>
                <div class="col m-auto">
                    <br/>
                    <h3>Recycle Old E-Waste</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat massa lectus, eget pretium
                        lacus porttitor eu.
                        Nulla vulputate, lorem quis dictum mollis, tellus nibh volutpat enim, ac sollicitudin dolor
                        neque id
                        velit.
                        Aenean lacus eros, volutpat ac quam quis, venenatis pellentesque enim. Sed ultrices dolor at
                        imperdiet pellentesque.
                    </p>
                </div>
            </div>

            <br/><br/><br/>

            <div class="row">
                <div class="col m-auto">
                    <h3>Trade With Others</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat massa lectus, eget pretium
                        lacus porttitor eu.
                        Nulla vulputate, lorem quis dictum mollis, tellus nibh volutpat enim, ac sollicitudin dolor
                        neque id
                        velit.
                        Aenean lacus eros, volutpat ac quam quis, venenatis pellentesque enim. Sed ultrices dolor at
                        imperdiet pellentesque.
                    </p>
                </div>
                <div class="col-lg-4 text-center">
                    <img src={connect_img} alt="connect-img" height="200rem"/>
                </div>
            </div>

            <br/><br/><br/>

            <div class="row">
                <div class="col-lg-4 text-center">
                    <img src={pin_img} alt="pin-img" height="200rem"/>
                </div>
                <div class="col m-auto">
                    <br/>
                    <h3>Guide You To Your Nearest Recycling Bin</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat massa lectus, eget pretium
                        lacus porttitor eu.
                        Nulla vulputate, lorem quis dictum mollis, tellus nibh volutpat enim, ac sollicitudin dolor
                        neque id
                        velit.
                        Aenean lacus eros, volutpat ac quam quis, venenatis pellentesque enim. Sed ultrices dolor at
                        imperdiet pellentesque.
                    </p>
                </div>
            </div>
        </section>
    </div>
  );
}

export default HomeContent;
