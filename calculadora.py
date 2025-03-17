def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        raise ValueError("No es pot dividir per zero")
    return a / b

if __name__ == "__main__":
    print("Calculadora en Python")
    print("Suma: 5 + 3 =", add(5, 3))
    print("Resta: 5 - 3 =", subtract(5, 3))
    print("Multiplicació: 5 * 3 =", multiply(5, 3))
    print("Divisió: 5 / 3 =", divide(5, 3))
