import React from 'react';

export default function Modal(props) {
  console.log(props.singleData);
  const { image_link, description, features, integrations, pricing } =
    props.singleData;
  return (
    <div>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="card lg:card-side bg-base-100">
            <div className="card-body">
              <h2 className="card-title">
                {description ? description : 'Not Found'}
              </h2>
              <div></div>

              <div className="flex justify-between">
                <div>
                  <h1 className="text-xl font-bold">Features</h1>
                  {Object.values(features || {}).map((value) => (
                    <p>
                      {value.feature_name ? value.feature_name : 'Not Found'}
                    </p>
                  ))}
                </div>
                <div>
                  <h1 className="text-xl font-bold">Integrations</h1>
                  {integrations &&
                    integrations.map((int) => <p>{int ? int : 'Not Found'}</p>)}
                </div>
              </div>
            </div>
            <figure className="w-full">
              <img
                className="w-full h-full"
                src={image_link && image_link[0]}
                alt="Album"
              />
            </figure>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
