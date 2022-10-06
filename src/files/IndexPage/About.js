import '../../css/indexCSS.css';
import garbage_dump_img from '../../images/garbage_dump.png'
import ewaste_img from '../../images/ewaste.png'

function About() {
  return (
    <div>
        <section id="middle">
            <h2>
                Our Mission
            </h2>
            <br/>
            <div className="row">
                <div className="col-lg-4 text-center">
                    <img src={garbage_dump_img} alt="garbage_dump_img" height="200rem"/>
                </div>
                <div className="col m-auto text-start">
                    <p>
                        Singapore generates approximately 60,000 tonnes of electronic waste yearly, and this number is only
                        expected to increase with advancements in technology. People tend to throw away their old electronic
                        devices, which has detrimental effects on the environment as they contain hazardous materials which
                        release
                        toxic
                        chemicals when incinerated.
                    </p>
                    <br/>
                    <p>
                        The obvious solution would be to recycle, yet what is not commonly known is recycling takes up
                        a lot of resources in the process of extracting raw materials, and is not actually as perfect a solution
                        as
                        it seems. This is what sparked the idea of Karung Gun-E, encouraging reusing over recycling for e-waste
                        that
                        is still
                        in working condition, in hopes of further minimising the harmful impacts on the environment.
                    </p>
                </div>
            </div>
        </section>

        <section id="middle" style={{backgroundColor: "#E4F9F5"}}>
            <h2>
                Our Vision
            </h2>
            <br/>
            <div className="row">
                <div className="col m-auto text-end">
                    <p>
                        Electronics contributing to e-waste include items such as toys and calculators do not have high
                        resale value or precious metal for recycling. Hence, they tend to be disposed of despite being in
                        good working condition. Karung Gun-E aims to provide a platform to connect item owners willing to
                        donate these appliances or other electronics to potential beneficiaries (Karung Gun-Es) such as
                        charities.
                    </p>
                    <br/>
                    <p>If an item is not deemed as reusable, Karung Gun-E will also provide information about and promote
                        awareness on recycling e-waste as we tend to assume everything electronic can go into the bin, which
                        is
                        not really the case.
                    </p>
                </div>
                <div className="col-lg-4 text-center">
                    <img src={ewaste_img} alt="ewaste-img" height="200rem"/>
                </div>
            </div>
        </section>
    </div>
  );
}

export default About;
