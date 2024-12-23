import React from "react";

const FAQ = () => {
  return (
    <>
      <div className="container-fluid mt-5">
        <h1 className="text-center">FAQ</h1>
        <h5 className="text-center">We've got answers.</h5>

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button text-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What is the Mark Cuban Cost Plus Drug Company?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Mark Cuban Cost Plus Drug Company (more commonly known as Cost
                Plus Drugs) offers safe medicines at the lowest possible price.
                We provide complete transparency on the cost of drugs so that
                patients know they are getting a fair price. As a
                public-benefit corporation, we prioritize our social mission of
                improving public health. To learn more about our mission, check
                out costplusdrugs.com/mission.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed text-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                How are your prices so cheap?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Our prices are the true cost to get each medication from the
                manufacturer to you. We cut out the pharmacy middlemen and
                negotiate directly with manufacturers to get the best possible
                price. Then, we show you exactly how much you’ll pay for us to
                keep our business running and how much it will cost to prepare
                and ship your prescription.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed text-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Can I use my insurance?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Currently, we only accept prescription insurance for the
                following insurance providers. However, we will be adding more
                insurance plans in the coming months. If you aren’t sure if
                Cost Plus Drugs accepts your insurance, please contact your
                insurance company and ask if Mark Cuban Cost Plus Drug Company
                is an “in-network pharmacy" with your prescription plan.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed text-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                My provider sent me here. What do I do next?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Just sign up for an account and the prescription from your
                doctor will be connected to your account. Then, our pharmacy
                partner will notify you when you’re ready to checkout and get
                your medications delivered.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed text-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Who fills my prescription?
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                We work with HealthDyne, our trusted fulfillment partner to
                fill your prescriptions. HealthDyne's accredited pharmacists
                will ensure your medication is safe and delivered to your
                doorstep on time.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button
                className="accordion-button collapsed text-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                Can I get all my medication here?
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                For now, we only offer a set amount of medications. To see all
                medications we currently offer, please go to
                costplusdrugs.com/medications. We will be expanding this list
                regularly so if you don't see your medication, please sign up
                for our newsletter to be updated when we add new medications.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
