from flask import Flask, render_template, request, redirect, url_for, flash, session
import helper

app = Flask(__name__, instance_relative_config=True)
app.config.from_pyfile('config.py')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if helper.validate_login(username, password):
            session['username'] = username
            flash('Login successful!', 'success')
            return redirect(url_for('index'))
        else:
            flash('Invalid credentials. Please try again.', 'danger')
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if helper.register_user(username, password):
            flash('Registration successful! You can now log in.', 'success')
            return redirect(url_for('login'))
        else:
            flash('Username already exists. Please choose a different one.', 'danger')
    return render_template('register.html')

@app.route('/diet_plan', methods=['GET', 'POST'])
def diet_plan():
    plan = None
    if request.method == 'POST':
        goal = request.form['goal']
        preferences = request.form.getlist('preferences')
        restrictions = request.form.getlist('restrictions')
        plan = helper.generate_diet_plan(goal, preferences, restrictions)
    return render_template('diet_plan.html', plan=plan)

@app.route('/fitness_plan', methods=['GET', 'POST'])
def fitness_plan():
    plan = None
    if request.method == 'POST':
        goal = request.form['goal']
        preferences = request.form.getlist('preferences')
        restrictions = request.form.getlist('restrictions')
        plan = helper.generate_fitness_plan(goal, preferences, restrictions)
    return render_template('fitness_plan.html', plan=plan)

if __name__ == '__main__':
    app.run(debug=True)
