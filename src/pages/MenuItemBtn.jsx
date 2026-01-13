export default function MenuItemBtn({ i, BookingBtnAdded, lowBookedBtn }) {
  console.log(i);
  // btn of dining booked
  return (
    <div key={i}>
      {BookingBtnAdded ? (
        <button className="border px-2 bg-green-500 text-white">Booked</button>
      ) : (
        <button className="border px-2 bg-red-500 text-white">Details</button>
      )}
    </div>
  );
}
