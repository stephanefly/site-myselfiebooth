import slots from "./imageSlots.json";

export const imageSlots = slots;

export function getImageSlot(id) {
  return imageSlots.find((slot) => slot.id === id);
}

export function getImageSlotsByPage(page) {
  return imageSlots.filter((slot) => slot.page === page);
}
