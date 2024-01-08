function Card({ borderDirection, rounded }) {
  
    return (
      <div className={`bg-[#F2BA33] border-black ${borderDirection} max-w-[25rem] ${rounded} py-4 px-4 lg:py-8`}>
        <div className="heading">
          <h1 className="text-2xl font-bold mb-4">Goals</h1>
        </div>
        <div className="details">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quia
            iste ex exercitationem repudiandae repellendus quisquam a pariatur
            odit velit error laborum, doloribus voluptatem tempore deleniti sequi,
            ipsam eveniet rerum impedit? Provident debitis quae, cumque laboriosam
            incidunt tempora unde ipsam necessitatibus hic culpa, magni quia
            officia atque possimus exercitationem expedita, voluptates similique
            nemo? Optio mollitia, adipisci eligendi quod earum corporis architecto
            sequi iste fuga consequuntur nesciunt corrupti ut veniam in unde culpa
            provident distinctio excepturi praesentium fugit! Quidem enim odio
            vitae ipsam totam quaerat, nesciunt, molestiae officiis id laudantium
            cupiditate aliquam necessitatibus itaque, ducimus omnis. Tempore
            dolores distinctio totam suscipit!
          </p>
        </div>
      </div>
    );
  }
  
  export default Card;
  