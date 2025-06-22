import "./PurchaseHistory.css";

export default function PurchaseHistory({ purchaseHistory }) {

  return (
    <div className="purchaseHistory">
      <h2 className="purchaseHistory-title">Purchase History</h2>
      {purchaseHistory.length === 0 ? (
        <p className="purchaseHistory-noun">No purchases recorded.</p>
      ) : (
        purchaseHistory.map((purchase, index) => (
          <div key={index} className="purchaseHistory-record">
            <h3 className="purchaseHistory-record-title">Successful purchase # {index + 1}</h3>
            <p className="purchaseHistory-record-idDate"><strong>ID:</strong> {purchase.id}</p>
            <p className="purchaseHistory-record-idDate"><strong>Date:</strong> {purchase.date}</p>

            <ul className="purchaseHistory-record-items">
              {purchase.items.map((item, idx) => (
              <li key={idx}>
                {item.name} x {item.countUpdateItem} ( ${item.price * item.countUpdateItem} )
              </li>
              ))}
            </ul>
            <p className="purchaseHistory-record-summary">Total: ${purchase.total.toLocaleString()}</p>
          </div>
        ))
      )}
    </div>
  );
}