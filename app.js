import { supabase } from './supabase-config.js';

const form = document.getElementById('inquiry-form');
const statusP = document.getElementById('form-status');

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const customer_name = document.getElementById('customer_name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        statusP.style.color = '#333';
        statusP.innerText = 'Sending your inquiry...';

        // Insert into Supabase table 'creatClient'
        const { error } = await supabase
            .from('creatClient')
            .insert([{ customer_name, email, message }]);

        if (error) {
            statusP.style.color = '#e03131';
            statusP.innerText = 'Error submitting form: ' + error.message;
        } else {
            statusP.style.color = '#2b8a3e';
            statusP.innerText = 'Thank you! Your inquiry has been sent successfully.';
            form.reset();
        }
    });
}
