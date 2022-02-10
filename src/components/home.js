import React from 'react'
import './home.scss';
import Card from './card.js';
function Home() {
    return (


        < div className="home_container" >

            <Card className="card" title="Heading" body="This is the body for article.You can put your content inside this body box." image={require('./background2.jfif')}></Card>
            <Card className="card" title="Heading" body="This is the body for article.You can put your content inside this body box." image={require('./background.jpg')}></Card>
            <Card className="card" title="Heading" body="This is the body for article.You can put your content inside this body box." image={require('./pic1.PNG')}></Card>
            <Card className="card" title="Heading" body="This is the body for article.You can put your content inside this body box." image={require('./pic2.PNG')}></Card>
            <Card className="card" title="Heading" body="This is the body for article.You can put your content inside this body box." image={require('./pic3.PNG')}></Card>
            <Card className="card" title="Heading" body="This is the body for article.You can put your content inside this body box." image={require('./pic4.PNG')}></Card>
            <Card className="card"></Card>
            <Card className="card"></Card>
            <Card className="card"></Card>

        </div >


    );
}
export default Home;