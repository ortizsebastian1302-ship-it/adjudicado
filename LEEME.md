# ¡ADJUDICADO! en línea

El juego de cartas de la contratación estatal, para jugar en grupo y cada persona desde su propio celular o computador.

## Qué es cada archivo

- `src/index.html`: la página que ven los jugadores.
- `src/worker.js`: el servidor. Crea las salas, guarda la partida y aplica las reglas.
- `wrangler.toml`: la configuración para Cloudflare. No hace falta cambiarla.
- `package.json`: instala la herramienta de Cloudflare (wrangler).

## Publicarlo en Cloudflare (gratis)

Necesitas:

- Una cuenta gratuita de Cloudflare: https://dash.cloudflare.com/sign-up
- Node.js instalado (versión 20 o más reciente): https://nodejs.org

Pasos:

1. Descomprime esta carpeta.
2. Abre una terminal dentro de la carpeta `adjudicado-online`. En Windows: clic derecho dentro de la carpeta y luego "Abrir en Terminal".
3. Instala la herramienta de Cloudflare:
   ```
   npm install
   ```
4. Inicia sesión en tu cuenta. Se abre el navegador; dale "Allow":
   ```
   npx wrangler login
   ```
5. Publica el juego:
   ```
   npx wrangler deploy
   ```
6. Al terminar, la terminal muestra la dirección del juego, algo así:
   `https://adjudicado.TU-USUARIO.workers.dev`

   Esa es la URL que compartes con tu grupo.

Si Cloudflare te pide elegir un subdominio `workers.dev` la primera vez, escribe cualquier nombre, por ejemplo tu nombre o el del grupo.

Para cambiar el nombre de la dirección, edita `name = "adjudicado"` en `wrangler.toml` antes del paso 5.

## Cómo se juega en línea

1. Una persona abre la URL y toca **Crear sala nueva**. Esa persona queda como anfitrión.
2. Toca **Copiar enlace** y lo comparte por WhatsApp. El enlace trae el código de la sala, por ejemplo `?sala=KXPT`.
3. Cada jugador abre el enlace en su dispositivo, escribe el nombre de su empresa, elige su color y toca **Entrar**.
4. El anfitrión elige el **modo novato** (meta 15) o el **modo completo** (meta 30) y toca **Empezar la partida**.
   - Se puede jugar de 2 a 8 personas; lo recomendado son 4.
5. En cada turno, cada jugador hace su parte en su propio celular:
   - El Ordenador del gasto voltea la carta y avanza los pasos.
   - Las ofertas se eligen en secreto en el celular de cada uno y se revelan cuando todos eligieron.
   - En la subasta inversa, cada jugador toca "Bajar" en su celular. Si nadie baja en 3 segundos, gana el último.
   - En el concurso de méritos y en los desempates, gana el primero que responda bien en su celular.
   - Los retos solo los ve quien los hace. El Ordenador hace de juez y marca quién adivinó.
6. Si alguien se desconecta o cierra la página, vuelve a abrir el mismo enlace en el mismo dispositivo y regresa a su lugar.

## Probarlo en tu computador antes de publicar

```
npm install
npx wrangler dev
```

Luego abre http://localhost:8787 en varias pestañas o ventanas de incógnito para simular varios jugadores.
