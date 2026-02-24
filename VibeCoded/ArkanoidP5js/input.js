/**
 * input.js
 * Håndterer input fra brugeren (mus, tastatur osv.)
 */

function handleInput() {
    // Vi opdaterer kun staten her. 
    // Vi lader logikken om, hvorvidt det er "lovligt", ligge i rules.js
    state.paddleX = mouseX;
}