# AI Logo Generation Prompts for Highball Technomancy

Use these prompts with Midjourney, DALL-E, Stable Diffusion, or similar tools.

## Main Logo Prompt (Recommended)

```
A minimalist 2D vector logo of a highball cocktail glass on pure black background. 
The glass is outlined in neon green (#00c853) with a glowing effect. 
Inside the glass: ice cubes with cyan (#00e5ff) circuit board patterns etched on them, 
small purple (#a855f7) neural network nodes connected by lines floating in the liquid, 
and binary code bubbles (0s and 1s) rising upward. 
The liquid has a subtle gradient from green to purple. 
Neon cyberpunk aesthetic, clean lines, geometric shapes, technology themed. 
High contrast, glowing edges, suitable for a tech/AI brand. 
--style flat vector --no realistic shading --ar 1:1
```

## Alternative Prompt (More Abstract)

```
Abstract 2D logo combining a highball glass silhouette with technology symbols. 
Neon green (#00c853) glass outline, circuit board ice cubes in cyan (#00e5ff), 
purple (#a855f7) data visualization elements. Binary code (0s and 1s) as bubbles. 
Minimalist cyberpunk style, black background, geometric, vector art, 
clean and professional. Glowing neon effect. 
--style minimalist vector --no photorealistic --ar 1:1
```

## Style Variations

### Isometric 3D Style
```
Isometric 3D icon of a highball glass filled with glowing green liquid. 
Ice cubes with visible circuit patterns in cyan. Purple neural network nodes 
floating inside. Binary code (0 and 1) bubbles rising. Neon cyberpunk aesthetic. 
Black background. Green (#00c853), purple (#a855f7), cyan (#00e5ff) color palette. 
Clean geometric shapes. Technology themed. 
--style isometric 3D icon --ar 1:1
```

### Glitch/Neon Style
```
A highball cocktail glass logo with heavy neon glow effects. 
Bright neon green (#00c853) outline with chromatic aberration. 
Ice cubes displaying holographic cyan circuit patterns. 
Purple neural network overlays. Binary code glitching upward. 
Dark void background. Cyberpunk glitch aesthetic. 
Very high contrast. Technology meets cocktails. 
--style neon glitch art --ar 1:1
```

## Design Elements to Emphasize

Use these keywords to refine your prompt:

**Glass Elements:**
- Highball glass, tall glass, cocktail glass
- Transparent, outlined, geometric
- Tapered cylinder shape

**Tech Elements (Ice):**
- Circuit board patterns, PCB traces, microchip design
- Cyan glowing lines, electronic pathways
- Geometric ice cube shapes

**AI Elements (Neural Network):**
- Connected nodes, neural pathways, network visualization
- Small circles with connecting lines
- Purple glowing spheres, data nodes

**Bubbles:**
- Binary code: 0 and 1 characters
- Rising upward motion, floating
- Monospace font, digital readout style

**Color Instructions:**
- Exact hex codes: #00c853 (green), #a855f7 (purple), #00e5ff (cyan)
- Black background: #000000
- Neon glow effect, bloom, light emission

**Style Keywords:**
- Minimalist, clean, geometric, vector
- Cyberpunk, neon, technological
- High contrast, sharp edges
- 2D flat design OR isometric 3D (specify)

## Post-Processing Tips

If you generate an image and want to convert it to SVG:

1. **Remove background:** Use [remove.bg](https://remove.bg) or Photoshop
2. **Vectorize:** Use Adobe Illustrator's Image Trace or [vectorizer.ai](https://vectorizer.ai)
3. **Simplify:** Reduce anchor points, clean up paths
4. **Export as SVG:** Optimize for web (remove unnecessary data)

## Testing Your Logo

Once generated, test it:
- ✅ Works on black background (primary)
- ✅ Works on white background (secondary)
- ✅ Recognizable at 32x32px (favicon size)
- ✅ Looks good at 200x200px (header size)
- ✅ Scales to 1000x1000px without artifacts

## Example Midjourney Command

```
/imagine prompt: minimalist 2D vector logo of a highball glass, neon green outline, circuit board ice cubes, purple neural nodes, binary bubbles, black background, cyberpunk tech aesthetic, clean geometric --style flat vector --v 6 --ar 1:1
```

## Example DALL-E Prompt

```
Create a minimalist 2D logo icon: A highball cocktail glass outlined in bright neon green (#00c853) on a pure black background. Inside the glass are geometric ice cubes with cyan (#00e5ff) circuit board patterns. Small purple (#a855f7) spheres representing neural network nodes float in the liquid, connected by thin lines. Binary code bubbles (showing "0" and "1") rise upward. The style should be clean, geometric, and cyberpunk-inspired with glowing neon effects. Suitable for a technology/AI brand logo.
```

---

**Note:** The current website uses an SVG logo created directly in code. If you generate a better image, you can:
1. Save it as `logo.png` or convert to SVG
2. Replace the `<Logo>` component import in `src/pages/index.astro`
3. Or update `src/components/Logo.astro` with your new SVG code

Good luck! 🎨✨
