from flask import Flask, render_template, request, redirect, url_for, flash, session
from helper import get_diet_plan, get_fitness_plan, create_user, authenticate_user

app = Flask(__name__)
app.secret_key = 'supersecretkey'

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/diet_plan', methods=['GET', 'POST'])
def diet_plan():
    if request.method == 'POST':
        goal = request.form['goal']
        duration = request.form['duration']
        preferences = request.form.getlist('preferences')
        restrictions = request.form.getlist('restrictions')
        plan = get_diet_plan(goal, duration, preferences, restrictions)
        return render_template('diet_plan.html', plan=plan)
    return render_template('diet_plan.html')

@app.route('/fitness_plan', methods=['GET', 'POST'])
def fitness_plan():
    if request.method == 'POST':
        goal = request.form['goal']
        duration = request.form['duration']
        preferences = request.form.getlist('preferences')
        restrictions = request.form.getlist('restrictions')
        plan = get_fitness_plan(goal, duration, preferences, restrictions)
        return render_template('fitness_plan.html', plan=plan)
    return render_template('fitness_plan.html')

@app.route('/diet_plan', methods=['GET', 'POST'])
def diet_plan():
    if 'username' not in session:
        return redirect(url_for('login'))
    user = User.query.filter_by(username=session['username']).first()
    if request.method == 'POST':
        calorie_goal = request.form['calorie_goal']
        diet_type = request.form['diet_type']
        excluded_foods = request.form['excluded_foods']
        favorite_foods = request.form['favorite_foods']

        preferences = UserPreferences(
            user_id=user.id,
            calorie_goal=calorie_goal,
            diet_type=diet_type,
            excluded_foods=excluded_foods,
            favorite_foods=favorite_foods
        )
        db.session.add(preferences)
        db.session.commit()

        plan = generate_diet_plan(calorie_goal, diet_type, excluded_foods, favorite_foods)
        return jsonify(plan)
    return render_template('diet_plan.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/blog')
def blog():
    return render_template('blog.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/feature')
def feature():
    return render_template('feature.html')

@app.route('/product')
def product():
    return render_template('product.html')

@app.route('/testimonial')
def testimonial():
    return render_template('testimonial.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        user = User.query.filter_by(username=username).first()
        if user and check_password_hash(user.password, password):
            session['username'] = username
            return redirect(url_for('home'))
        else:
            flash('Invalid username or password')
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if User.query.filter_by(username=username).first():
            flash('Username already exists')
        else:
            hashed_password = generate_password_hash(password, method='sha256')
            new_user = User(username=username, password=hashed_password)
            db.session.add(new_user)
            db.session.commit()
            session['username'] = username
            return redirect(url_for('home'))
    return render_template('register.html')

@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('home'))

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run(debug=True)
