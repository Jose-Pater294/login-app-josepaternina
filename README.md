# Login App

Formulario de inicio de sesión con HTML, CSS y JavaScript.
Autor: José Sebastián Paternina Salom - CECAR.

## Estrategia de ramas: GitHub Flow

- La rama `main` siempre contiene una versión estable y desplegable.
- Cada funcionalidad se desarrolla en una rama corta `feature/nombre`.
- Los cambios se integran a `main` solo mediante Pull Request revisado por un compañero.
- Cada Pull Request ejecuta el workflow de GitHub Actions antes de fusionarse.

**Justificación:** es un proyecto pequeño, con un equipo reducido y sin versiones
en paralelo que mantener. GitHub Flow evita la complejidad de Git Flow (develop,
release, hotfix) y favorece la Integración Continua, porque las ramas viven poco
tiempo y se integran rápido a `main`.
