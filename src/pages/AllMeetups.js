function AllMeetupsPage() {

    const DUMMY_DATA = [
        {
          id: 'm1',
          title: 'This is a first meetup',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
          address: 'Meetupstreet 5, 12345 Meetup City',
          description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
        },
        {
          id: 'm2',
          title: 'This is a second meetup',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
          address: 'Meetupstreet 5, 12345 Meetup City',
          description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
        }
      ];


    return <div>
            <h1>All Meetups Page </h1>
            {DUMMY_DATA.map((meetup, index) => (
                <ul key={index}>
                    <li> <h2>{meetup.title}</h2> <p>{meetup.description}</p>  </li>
                </ul>
            ))}
        </div>;
}

export default AllMeetupsPage;