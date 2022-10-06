import '../../css/faqCSS.css';

function Faq() {
  return (
    <div>
        <section id="faq-header" class="text-center">
            <br/>
            <h2>Frequently Asked Questions (FAQ)</h2>
            <h5>Hello! How can we help?</h5>
            <br/>
        </section>

        <div className="questions">
            <ol type="1">
                <li><h3>How do I start selling/buying?</h3></li>
                    <ul>
                        <p>If you are a first time user, you can signup by clicking <a href="/signup"> this link </a>  or if you already have an account, simply <a href="/login"> sign in </a>. After that you will be able to see all the listings in the market and will be able to add your own as well!</p>
                    </ul>
                <hr/>
                <li><h3>What are the products available for sale?</h3></li>
                <ul>
                    <p>In an effort to reduce Singapore's e-waste the sellers in this community only put up common e-waste items such as home appliances, laptop parts, batteries etc for listing. We make sure the products are in working condition so that it can be recycled, reused or even repurposed by another person.</p>
                </ul>
            <hr/>
                <li><h3>What do you do?</h3></li>
                <ul>
                    <p>For more information on what we are all about, click <a href="/about"> here </a> to find out more!</p>
                </ul>
            <hr/>
                <li><h3>How long will it take till someone buys my listing?</h3></li>
                    <ul>
                        <p>Depends on what's popular on the market currently! For now we have noticed people being more interested in home appliances and on average took 4-5 days to find a buyer to a seller. However, don't be discouraged if your item isn't selling as fast as you'd like as we </p>
                    </ul>
                <hr/>
            </ol>
        </div>
    </div>
  );
}

export default Faq;
