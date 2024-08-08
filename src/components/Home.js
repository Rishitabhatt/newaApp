import shop from '../assets/shop.jpg';
import web from '../assets/web.jpg';
function Home() {
    return (
        <>
            <div className="banner">
                <div className="container">
                    <h1>
                        Get started with <span>little</span> fashion
                    </h1>
                    <div className="mine">
                        <div className="pic">
                            <ul>
                                <li>introduction</li>
                                <li>How we work?</li>
                                <li>Capabilities</li>
                            </ul>
                        </div>
                        <div className="boxx">
                            <img src={web} className="img-fluid" />
                        </div>
                        <div className="add">
                            <h2>
                                Good <span>Design</span> Ideas for<span> your</span> fashion
                            </h2>
                            <p style={{ fontSize: 16 }}>
                                Little Fashion templates comes with sign in / sign up pages, product
                                listing / product detail, about, FAQs, and contact page. Since this
                                HTML template is based on Boostrap CSS library, you can feel free to
                                add more components as you need.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="your">
                    <div className="dot1">
                        <img src={shop}/>
                    </div>
                    <div className="dot2">
                        <h1>
                            <span>Retail</span> Shop Owners
                        </h1>
                        <p>
                            Credits go to Unsplash and FreePik websites for images used in this
                            Little Fashion by Tooplate.
                        </p>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Home;