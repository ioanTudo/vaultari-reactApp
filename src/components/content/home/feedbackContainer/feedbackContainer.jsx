import style from "./feedbackContainer.module.css";
import { ListFeedback } from "./listFeedback.jsx";

export const FeedBackContainer = () => {
  return (
    <>
      <div className={style.textContent}>
        <h1 className={style.heading}>
          Vaultari Insurance and Risk Services is Uniquely Qualified to Help
        </h1>
        <p className={style.description}>
          It’s established that having commercial insurance that addresses your
          company’s unique needs is essential, but obtaining coverage that
          inspires your confidence is often another story. At
          <strong>Vaultari Insurance and Risk Services</strong>, we focus on
          using our vast experience to provide every client – no matter how
          large or how small your business might be – with our special brand of
          insurance-related acumen, insight, and commitment. Whether you run a
          business, an association, or any other type of commercial group, you
          likely have insurance issues, and we have results-driven solutions
          that are tailored specifically for your commercial insurance needs.
        </p>
      </div>
      <h2 className={style.testimonialHeader}>testimonials</h2>
      <ListFeedback />
    </>
  );
};
