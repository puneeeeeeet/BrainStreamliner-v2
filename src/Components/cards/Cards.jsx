import "../cards/testStyles.css";

const Cards = () => {
  return (
    <>
      <div className="">
        <h1 className="text-4xl  text-white"></h1>
        <section class="card-list ">
          <article class="card">
            <header class="card-header">
              
              <p className="text-left">
              "Gayatri Ma&apos;am&apos;s training programs are truly transformative. Her practical approach and deep knowledge stand out!"</p>
            </header>

            

            <div class="tags space-x-2">
              ~Vani Katyal
            </div>
          </article>
          <article class="card">
            <header class="card-header">
             
              <p className="text-left">
              "Brainstreamliner workshops are the best I&apos;ve ever attended. So well-structured and insightful!"
              </p>
            </header>

            

            <div class="tags space-x-2">
              ~Radhika Arora
            </div>
          </article>

          <article class="card">
            <header class="card-header">
              <p className="text-left">
              "I have attended multiple workshops, but nothing compares to the experience at Brainstreamliner. Her ability to blend psychology concepts with practical application is unparalleled."</p>
            </header>

            <div class="tags space-x-2">
            ~Aditya Gaur
            </div>
          </article>

          <article class="card">
            <header class="card-header">
              
              <p className="text-left">
              "Gayatri Ma&apos;am combines theoretical knowledge with real-world examples that make her training programs exceptional."</p>
            </header>

            <div class="tags space-x-2">
              ~Akshar
            </div>
          </article>

          <article class="card">
            <header class="card-header">
              
              <p className="text-left">
              "Gayatri Ma&apos;am always provides logical, clear solutions to complex queries. Highly recommend her sessions!"</p>
            </header>

            <div class="tags space-x-2">
             ~Naman Dosi
            </div>
          </article>

          <article class="card">
            <header class="card-header">
              
              <p className="text-left">
              "Always provides logical, clear solutions to complex queries. Highly recommends her sessions!"</p>
            </header>

            <div class="tags space-x-2">
              ~Harshita Saini
            </div>
          </article>

          {/* <article class="card">
            <header class="card-header">
              <p>2 February 2021</p>
              <p className="text-left">
                A news application that retrieves data from the Hackernews API
                and displays it in a beautiful dark interface.
              </p>
            </header>

            <div class="project-author ">
              <div class="author-name">
                <div class="author-name-prefix text-white ">Hacker News</div>
              </div>
            </div>

            <div class="tags space-x-2">
              <a href="https://github.com/thelordzeus/HackerNews">Code</a>
            </div>
          </article> */}
        </section>
      </div>
    </>
  );
};

export default Cards;