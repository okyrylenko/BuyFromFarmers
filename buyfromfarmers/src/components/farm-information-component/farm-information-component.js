import "bootstrap/dist/css/bootstrap.min.css";

const FarmInformationComponent = function ({ farms }) {
  return (
    <>
      <div className="d-flex flex-column flex-lg-row justify-content-between flex-wrap">
        {farms.map((farm) => {
          return (
            <form key={farm.title} className="mx-lg-2">
              <fieldset>
                <div className="d-flex flex-column">
                  <div>
                    <div className="text-center">{farm.title}</div>
                    <button
                      className="btn btn-outline-light"
                      data-bs-toggle="modal"
                      data-bs-target="#edit-farm"
                    >
                      EDIT
                    </button>
                  </div>
                </div>
              </fieldset>
            </form>
          );
        })}
      </div>
    </>
  );
};

export default FarmInformationComponent;
