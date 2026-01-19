import { useEffect, useState } from "react";
import '../styles/Wilhan_project.module.css';


function storageKey(tourKey) {
  return `uas:reviews:${tourKey}`;
}

function readReviews(tourKey) {
  try {
    const raw = localStorage.getItem(storageKey(tourKey));
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveReviews(tourKey, list) {
  localStorage.setItem(storageKey(tourKey), JSON.stringify(list));
}

export default function Reviews({ tourKey = "generic" }) {
  const [reviews, setReviews] = useState(() => readReviews(tourKey));
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");

  useEffect(() => {
    setReviews(readReviews(tourKey));
  }, [tourKey]);

  function add() {
    const r = { id: Date.now(), rating: Number(rating), text };
    const next = [r, ...reviews];
    saveReviews(tourKey, next);
    setReviews(next);
    setText("");
    setRating(5);
  }

  const avg = reviews.length ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1) : null;

  return (
    <div className="card shadow-lg mt-4 p-4 rounded-4 text-bg-light bg-opacity-75">
      <h5>Reviews {avg && <small className="text-muted">(avg {avg}/5)</small>}</h5>
      <div className="mb-2 d-flex gap-2">
        <select className="form-select form-select-sm" style={{ width: 90 }} value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value={5}>5</option>
          <option value={4}>4</option>
          <option value={3}>3</option>
          <option value={2}>2</option>
          <option value={1}>1</option>
        </select>
        <input className="form-control" placeholder="Write a quick review" value={text} onChange={(e) => setText(e.target.value)} />
        <button className="btn btn-primary" onClick={add}>Add</button>
      </div>

      <div>
        {reviews.length === 0 && <div className="text-muted">No reviews yet.</div>}
        {reviews.map((r) => (
          <div key={r.id} className="p-2 mb-2 border-dark border rounded">
            <div><strong>{r.rating}/5</strong></div>
            <div className="text-muted">{r.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
