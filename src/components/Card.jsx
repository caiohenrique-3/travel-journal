import "../styles/card.css";

export default function Card(props) {
  const card = props.card;
  let formattedStartDate = new Date(card.startDate);
  let formattedEndDate = new Date(card.endDate);
  formattedStartDate = formattedStartDate.toISOString().split("T")[0];
  formattedEndDate = formattedEndDate.toISOString().split("T")[0];

  return (
    <>
      <article id={"card " + card.cardId}>
        <div className="card-container">
          <div className="img-container">
            <img src={card.img} alt={card.imgAlt} />
          </div>

          <div className="info-container">
            <div id="location">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <p>{card.country} •</p>
              <a
                href={card.mapsUrl}
                aria-label="Go to the location on OpenStreetMap website"
              >
                View on OpenStreetMap
              </a>
            </div>

            <div id="place">
              <h2 lang={card.titleLang}>{card.title}</h2>
            </div>

            <div id="date">
              <h3>
                <time dateTime={`${formattedStartDate} - ${formattedEndDate}`}>
                  {card.startDate} - {card.endDate}
                </time>
              </h3>
            </div>

            <div id="description">
              <p>{card.description}</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
