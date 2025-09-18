import React, { useMemo } from "react";
import { useCart } from "../../components/context/CartContext"; // ajusta la ruta si es "contexts"
import styles from "./ShoppingCartModal.module.css";

export default function ShoppingCartModal({ onClose }) {
  const { items, add, removeOne, clear } = useCart();

  const total = useMemo(
    () => items.reduce((acc, it) => acc + it.price * it.amount, 0),
    [items]
  );

  // ✅ Número de WhatsApp sin "+" ni espacios
  const WHATSAPP_NUMBER = "34633022828";

  // ✅ Handler: abre WhatsApp con el pedido completo
  function handleCheckoutWhatsApp() {
    if (!items.length) return;

    const formatEUR = (n) =>
      new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
      }).format(n);

    const lines = items.map(
      (it) => `• ${it.name} x${it.amount} — ${formatEUR(it.price * it.amount)}`
    );

    const text =
      `Bonjour, je voudrais finaliser cette commande :\n\n` +
      `${lines.join("\n")}\n\n` +
      `Total : ${formatEUR(total)}\n\n` +
      `Nom : \nAdresse : \nMode de paiement : \nRemarques : `;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank");

    // (Optionnel) Vider le panier après envoi :
    // clear();
  }

  if (!items.length) {
    return (
      <div className={styles.panel}>
        <div className={styles.header}>
          <h3>Votre panier</h3>
          <button type="button" className={styles.close} onClick={onClose}>
            ×
          </button>
        </div>
        <div className={styles.empty}>Votre panier est vide.</div>
      </div>
    );
  }

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <h3>Votre panier</h3>
        <button type="button" className={styles.close} onClick={onClose}>
          ×
        </button>
      </div>

      {items.length === 0 ? (
        <div className={styles.empty}>Votre panier est vide.</div>
      ) : (
        <>
          <div className={styles.list}>
            {items.map((it) => (
              <div key={it.id} className={styles.row}>
                <div className={styles.info}>
                  <div className={styles.name}>{it.name}</div>
                  <div className={styles.price}>{it.price.toFixed(2)} €</div>
                </div>

                <div className={styles.qty}>
                  <button
                    type="button"
                    className={styles.btn}
                    onClick={() => removeOne(it.id)}
                    aria-label={`Retirer 1 ${it.name}`}
                    title="−"
                  >
                    −
                  </button>
                  <span className={styles.amount}>{it.amount}</span>
                  <button
                    type="button"
                    className={styles.btn}
                    onClick={() => add(it)}
                    aria-label={`Ajouter 1 ${it.name}`}
                    title="+"
                  >
                    +
                  </button>
                </div>

                <div className={styles.subtotal}>
                  {(it.price * it.amount).toFixed(2)} €
                </div>
              </div>
            ))}
          </div>

          <div className={styles.footer}>
            <button type="button" className={styles.clear} onClick={clear}>
              Vider
            </button>

            <div className={styles.total}>
              <span>Total</span>
              <strong>{total.toFixed(2)} €</strong>
            </div>

            <button
              type="button"
              className={styles.checkout}
              onClick={handleCheckoutWhatsApp}
            >
              Finaliser la commande par WhatsApp
            </button>
          </div>
        </>
      )}
    </div>
  );
}
