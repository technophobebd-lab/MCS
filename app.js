import { supabase } from './supabase-config.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('inquiry-form');
    const statusP = document.getElementById('form-status');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const customer_name = document.getElementById('customer_name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        statusP.style.color = '#333';
        statusP.innerText = 'Sending your inquiry...';

        const { error } = await supabase
            .from('inquiries')
            .insert([{ customer_name, email, message }]);

        if (error) {
            statusP.style.color = '#ff6b6b';
            statusP.innerText = 'Error submitting form: ' + error.message;
        } else {
            statusP.style.color = '#51cf66';
            statusP.innerText = 'Thank you! Inquiry submitted successfully.';
            form.reset();
        }
    });
});