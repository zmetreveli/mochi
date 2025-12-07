import React, { useMemo } from "react";
import { useCart } from "../../components/context/CartContext";
import styles from "./ShoppingCartModal.module.css";

export default function ShoppingCartModal({ onClose }) {
  const { items, add, removeOne, clear } = useCart();

  const total = useMemo(
    () => items.reduce((acc, it) => acc + it.price * it.amount, 0),
    [items]
  );

  // ✅ Número de WhatsApp sin "+" ni espacios
  const WHATSAPP_NUMBER = "33753777557";

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

// import React, { useMemo, useState } from "react";
// import { useCart } from "../../components/context/CartContext";
// import styles from "./ShoppingCartModal.module.css";
// import { supabase } from "../../lib/supabase";

// export default function ShoppingCartModal({ onClose }) {
//   const { items, add, removeOne, clear } = useCart();

//   const STRIPE_CHECKOUT_URL =
//     "https://buy.stripe.com/test_9B6bJ1fqj1zw7Un61O7Re00";

//   const [showForm, setShowForm] = useState(false);
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     postal: "",
//     city: "",
//     deliveryTime: "",
//     notes: "",
//   });

//   const total = useMemo(
//     () => items.reduce((acc, it) => acc + it.price * it.amount, 0),
//     [items]
//   );

//   // -----------------------
//   //  SUBMIT ORDER (Supabase + Stripe)
//   // -----------------------
//   // async function handleSubmitOrder() {
//   //   if (!form.name || !form.phone || !form.address) {
//   //     alert("Merci de remplir les informations obligatoires.");
//   //     return;
//   //   }

//   //   const { error } = await supabase.from("orders").insert({
//   //     name: form.name,
//   //     email: form.email,
//   //     phone: form.phone,
//   //     address: form.address,
//   //     postal_code: form.postal,
//   //     city: form.city,
//   //     delivery_time: form.deliveryTime,
//   //     notes: form.notes,
//   //     cart_items: items,
//   //     total: total,
//   //   });

//   //   if (error) {
//   //     console.error(error);
//   //     alert("Erreur lors de la sauvegarde.");
//   //     return;
//   //   }

//   //   // redirect to Stripe Checkout
//   //   window.location.href = STRIPE_CHECKOUT_URL;
//   // }
//   async function handleSubmitOrder() {
//     if (!form.name || !form.phone || !form.address) {
//       alert("Merci de remplir les informations obligatoires.");
//       return;
//     }

//     const { error } = await supabase.from("orders").insert({
//       status: "pending", // puedes usarlo luego en tu panel admin
//       name: form.name,
//       email: form.email,
//       phone: form.phone,
//       address: form.address,
//       postal_code: form.postal,
//       city: form.city,
//       delivery_time: form.deliveryTime,
//       notes: form.notes,
//       cart_items: items,
//       total: total,
//     });

//     if (error) {
//       console.error("Supabase insert error:", error);
//       alert("Erreur : " + error.message);
//       return;
//     }

//     window.location.href = STRIPE_CHECKOUT_URL;
//   }

//   if (!items.length) {
//     return (
//       <div className={styles.panel}>
//         <div className={styles.header}>
//           <h3>Votre panier</h3>
//           <button type="button" className={styles.close} onClick={onClose}>
//             ×
//           </button>
//         </div>
//         <div className={styles.empty}>Votre panier est vide.</div>
//       </div>
//     );
//   }

//   // -----------------------
//   //  MAIN VIEW
//   // -----------------------
//   return (
//     <div className={styles.panel}>
//       <div className={styles.header}>
//         <h3>Votre panier</h3>
//         <button type="button" className={styles.close} onClick={onClose}>
//           ×
//         </button>
//       </div>

//       <div className={styles.list}>
//         {items.map((it) => (
//           <div key={it.id} className={styles.row}>
//             <div className={styles.info}>
//               <div className={styles.name}>{it.name}</div>
//               <div className={styles.price}>{it.price.toFixed(2)} €</div>
//             </div>

//             <div className={styles.qty}>
//               <button
//                 type="button"
//                 className={styles.btn}
//                 onClick={() => removeOne(it.id)}
//               >
//                 −
//               </button>
//               <span className={styles.amount}>{it.amount}</span>
//               <button
//                 type="button"
//                 className={styles.btn}
//                 onClick={() => add(it)}
//               >
//                 +
//               </button>
//             </div>

//             <div className={styles.subtotal}>
//               {(it.price * it.amount).toFixed(2)} €
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className={styles.footer}>
//         <button type="button" className={styles.clear} onClick={clear}>
//           Vider
//         </button>

//         <div className={styles.total}>
//           <span>Total</span>
//           <strong>{total.toFixed(2)} €</strong>
//         </div>

//         {/* BUTTON → SHOW FORM */}
//         {!showForm && (
//           <button
//             type="button"
//             className={styles.checkout}
//             onClick={() => setShowForm(true)}
//           >
//             Finaliser la commande
//           </button>
//         )}

//         {/* FORM */}
//         {showForm && (
//           <div className={styles.form}>
//             <h4>Informations de livraison</h4>

//             <input
//               placeholder="Nom complet"
//               value={form.name}
//               onChange={(e) => setForm({ ...form, name: e.target.value })}
//             />

//             <input
//               placeholder="Email"
//               value={form.email}
//               onChange={(e) => setForm({ ...form, email: e.target.value })}
//             />

//             <input
//               placeholder="Téléphone"
//               value={form.phone}
//               onChange={(e) => setForm({ ...form, phone: e.target.value })}
//             />

//             <input
//               placeholder="Adresse"
//               value={form.address}
//               onChange={(e) => setForm({ ...form, address: e.target.value })}
//             />

//             <input
//               placeholder="Code postal"
//               value={form.postal}
//               onChange={(e) => setForm({ ...form, postal: e.target.value })}
//             />

//             <input
//               placeholder="Ville"
//               value={form.city}
//               onChange={(e) => setForm({ ...form, city: e.target.value })}
//             />

//             <input
//               placeholder="Heure de livraison (ex: 18h00)"
//               value={form.deliveryTime}
//               onChange={(e) =>
//                 setForm({ ...form, deliveryTime: e.target.value })
//               }
//             />

//             <textarea
//               placeholder="Remarques"
//               value={form.notes}
//               onChange={(e) => setForm({ ...form, notes: e.target.value })}
//             ></textarea>

//             <button
//               type="button"
//               className={styles.pay}
//               onClick={handleSubmitOrder}
//             >
//               Payer maintenant
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
