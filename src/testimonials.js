const getAvatarUrl = (idx) =>
  [
    `/assets/for-desktop/avatars/user_avatar_1.svg`,
    `/assets/for-desktop/avatars/user_avatar_2.svg`,
    `/assets/for-desktop/avatars/user_avatar_3.svg`,
    `/assets/for-desktop/avatars/user_avatar_2.svg`,
    `/assets/for-desktop/avatars/user_avatar_1.svg`,
  ][idx % 5];

const getUserName = (idx) =>
  [
    "Lisa White",
    "Tony Robinson",
    "Diana Daniels",
    "Tony Robinson",
    "Lisa White",
  ][idx % 5];

const getRate = (idx) => ["4.5", "5", "4.85", "5", "4.5"][idx % 5];

/**
 * Добавить карточки в секцию "Testimonials"
 *
 * @param {number} cardsCount
 * @return {void}
 */
export function setTestimonialsCards(cardsCount) {
  if (!("testimonialCardTemplate" in window)) return;

  const testimonialsWrapper = document.querySelector("#testimonialsWrapper");
  if (!testimonialsWrapper) return;

  new Array(cardsCount).fill(null).forEach((value, idx) => {
    const testimonialCard = testimonialCardTemplate.content.cloneNode(true);

    testimonialCard.querySelector('[tmp-element="userAvatar"]').src =
      getAvatarUrl(idx);
    testimonialCard.querySelector('[tmp-element="userName"]').textContent =
      getUserName(idx);
    testimonialCard.querySelector('[tmp-element="rate"]').textContent =
      getRate(idx);

    testimonialsWrapper.appendChild(testimonialCard);
  });
}
