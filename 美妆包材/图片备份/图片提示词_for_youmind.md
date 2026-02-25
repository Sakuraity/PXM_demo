# LuxePack Demo 图片提示词文档

> 共 41 张图片，供外部 AI 工具（Midjourney / DALL-E / Stable Diffusion 等）生成后，按文件名放置到对应目录。

## 目录结构

```
public/
└── images/
    ├── categories/      # 9 张分类封面图
    ├── products/        # 30 张产品图（10 SKU × 3 张/SKU）
    └── hero/            # 2 张首页 Hero Banner
```

---

## 一、首页 Hero Banner（2 张）

### hero-banner-01.jpg
**用途**：首页主 Hero Banner（桌面端）
**尺寸建议**：1920×1080px

```
Prompt:
Ultra-wide luxury cosmetic packaging flat-lay, an elegant arrangement of premium glass serum bottles, acrylic cream jars and aluminum lipstick tubes on a white marble surface with soft gold accents. Soft studio lighting, shallow depth of field, high-end beauty brand editorial style. No text, no people. Aspect ratio 16:9. Photorealistic, 8K.
```

---

### hero-banner-02.jpg
**用途**：首页次级 Banner / 移动端备用
**尺寸建议**：1440×800px

```
Prompt:
Luxury cosmetic packaging hero shot, a curated collection of glass dropper bottles, acrylic jars and aluminum tubes arranged on soft beige fabric with fresh botanical elements (white flowers, green leaves). Clean minimal composition, soft natural window light, premium skincare brand aesthetic. No text. Photorealistic, 8K.
```

---

## 二、分类封面图（9 张）

### cat-skincare.jpg
**用途**：应用分类 - 护肤包装
**尺寸建议**：800×600px

```
Prompt:
Overhead flat-lay of skincare packaging collection — a glass face cream jar with gold metal lid, a glass serum dropper bottle with amber tint, and an acrylic lotion pump bottle on white marble. Soft diffused light, luxury editorial style, clean white background with subtle shadows. No text. Photorealistic.
```

---

### cat-makeup.jpg
**用途**：应用分类 - 彩妆包装
**尺寸建议**：800×600px

```
Prompt:
Elegant makeup packaging flat-lay — a sleek aluminum twist-up lipstick tube in gun-metal finish and a transparent acrylic foundation pump bottle with rose gold accents, arranged on a soft pink velvet surface with scattered dried rose petals. Studio beauty lighting, luxury cosmetics brand style. No text. Photorealistic.
```

---

### cat-homecare.jpg
**用途**：应用分类 - 家清包装
**尺寸建议**：800×600px

```
Prompt:
Clean bathroom shelf scene with premium home care packaging — a tall HDPE shampoo pump bottle in matte white, a PET foam pump cleanser bottle in frosted finish, and a glass lotion pump bottle, arranged neatly on a white marble bathroom counter with fresh eucalyptus branches. Soft warm light. No text. Photorealistic.
```

---

### cat-glass.jpg
**用途**：材质分类 - 玻璃系列
**尺寸建议**：800×600px

```
Prompt:
Premium glass cosmetic packaging collection on dark slate — three pieces: a thick-base glass lotion pump bottle with metal pump, a clear glass serum dropper bottle with rubber bulb, and an amber glass jar with gold lid. Studio lighting with glass reflections and caustic light patterns. Luxury material showcase. No text. Photorealistic.
```

---

### cat-acrylic.jpg
**用途**：材质分类 - 亚克力系列
**尺寸建议**：800×600px

```
Prompt:
Acrylic cosmetic packaging material showcase — three pieces displayed on a frosted acrylic podium: a clear double-wall acrylic face cream jar with electroplated gold lid, a compact acrylic eye cream jar with rose gold embossing, and a transparent acrylic foundation pump bottle. Studio light with clean reflections. No text. Photorealistic.
```

---

### cat-plastic.jpg
**用途**：材质分类 - 塑料系列
**尺寸建议**：800×600px

```
Prompt:
Eco-conscious plastic cosmetic packaging showcase in soft sage green and white tones — a matte frosted PP refillable cream jar with its inner cup displayed separately, a PET foam pump bottle in pastel green, and a large HDPE pump bottle in clean white. Natural light, sustainability aesthetic, minimalist styling. No text. Photorealistic.
```

---

### cat-bottles.jpg
**用途**：类型分类 - 瓶类
**尺寸建议**：800×600px

```
Prompt:
Elegant cosmetic bottle collection — a tall glass lotion pump bottle, a slim glass serum dropper bottle, a transparent acrylic foundation pump bottle, and a PET foam pump bottle, all standing in a row on a white marble surface with soft side lighting. Beauty editorial photography. No text. Photorealistic.
```

---

### cat-jars.jpg
**用途**：类型分类 - 罐类
**尺寸建议**：800×600px

```
Prompt:
Luxury cosmetic jar collection flat-lay — a glass face cream jar with palace-style gold metal lid, a clear double-wall acrylic cream jar with electroplated lid, a compact acrylic eye cream jar, and a matte frosted PP refillable jar with inner cup shown. Arranged on soft white linen, top-down view, soft diffused studio lighting. No text. Photorealistic.
```

---

### cat-tubes.jpg
**用途**：类型分类 - 管类
**尺寸建议**：800×600px

```
Prompt:
Premium aluminum lipstick tubes collection — multiple aluminum twist-up lipstick tubes in different anodized finishes: gun-metal, rose gold, brushed silver and matte black, arranged in a diagonal line on a black marble surface. Macro beauty photography, specular highlights on metal surface. No text. Photorealistic.
```

---

## 三、产品图（30 张，10 SKU × 3）

> 命名规则：`product-[产品ID]-[类型].jpg`
> 类型：`hero`（主图） / `lifestyle`（场景图） / `detail`（细节图）

---

### SKU 01 — 奢华玻璃面霜罐 50ml（lpk-gj-001）

#### product-lpk-gj-001-hero.jpg
**用途**：产品主图，白底正面图

```
Prompt:
Professional product photography of a luxury 50ml glass face cream jar, borosilicate glass with double-wall construction, palace-style gold zinc alloy lid with embossed pattern. Clean white background, three-quarter view, soft studio lighting with gentle shadow. Premium skincare packaging, ultra-detailed. No text. Photorealistic.
```

---

#### product-lpk-gj-001-lifestyle.jpg
**用途**：产品场景图

```
Prompt:
Lifestyle scene — a luxury 50ml glass face cream jar with gold metal lid placed on a marble vanity tray beside a white ceramic bowl of dried flowers, a jade roller and a soft cream towel. Warm morning light through sheer curtains. Luxury skincare ritual aesthetic. No text. Photorealistic.
```

---

#### product-lpk-gj-001-detail.jpg
**用途**：产品细节图（盖子细节）

```
Prompt:
Macro close-up of a gold palace-style zinc alloy lid on a luxury glass face cream jar. Focus on the intricate embossed pattern and electroplated gold finish. Shallow depth of field, soft studio lighting showing metallic sheen. Premium cosmetic packaging detail shot. No text. Photorealistic.
```

---

### SKU 02 — 玻璃精华滴管瓶 30ml（lpk-gb-001）

#### product-lpk-gb-001-hero.jpg
**用途**：产品主图，白底正面图

```
Prompt:
Product photography of a 30ml borosilicate glass serum dropper bottle, slim elegant form with rubber bulb dropper top, amber tint glass, gold collar. Pure white background, front-facing view, soft diffused studio lighting. Premium skincare serum packaging. Ultra-detailed. No text. Photorealistic.
```

---

#### product-lpk-gb-001-lifestyle.jpg
**用途**：产品场景图

```
Prompt:
Lifestyle scene — a 30ml amber glass serum dropper bottle on a stone table beside a small white ceramic dish, cotton pads and fresh botanical sprigs. Soft morning daylight. Minimalist luxury skincare ritual setting. No text. Photorealistic.
```

---

#### product-lpk-gb-001-detail.jpg
**用途**：产品细节图（滴管头细节）

```
Prompt:
Macro close-up of a glass serum bottle dropper head — the rubber bulb, glass pipette and gold collar fitting. A single drop of golden serum forming at the tip. Shallow depth of field, clinical beauty photography style, soft neutral background. No text. Photorealistic.
```

---

### SKU 03 — 玻璃泵头乳液瓶 150ml（lpk-gb-002）

#### product-lpk-gb-002-hero.jpg
**用途**：产品主图，白底正面图

```
Prompt:
Product photography of a tall 150ml luxury glass lotion pump bottle, thick base, slender silhouette, long-neck zinc alloy metal pump in gold finish, frosted white glass body. Pure white background, elegant vertical composition, soft diffused studio lighting. Premium skincare packaging. No text. Photorealistic.
```

---

#### product-lpk-gb-002-lifestyle.jpg
**用途**：产品场景图

```
Prompt:
Luxury bathroom counter display — a tall frosted glass lotion pump bottle in the center, flanked by white candles and a small vase with white ranunculus flowers, on a marble countertop. Soft warm light, spa-like luxury atmosphere. No text. Photorealistic.
```

---

#### product-lpk-gb-002-detail.jpg
**用途**：产品细节图（泵头细节）

```
Prompt:
Macro close-up of a zinc alloy gold-plated pump head on a glass lotion bottle. Focus on the metallic texture, pump actuator and nozzle. Specular highlights on polished gold surface, soft neutral background. Premium beauty packaging detail shot. No text. Photorealistic.
```

---

### SKU 04 — 亚克力面霜罐 50ml（lpk-aj-001）

#### product-lpk-aj-001-hero.jpg
**用途**：产品主图，白底正面图

```
Prompt:
Product photography of a 50ml double-wall acrylic face cream jar with electroplated silver lid. Crystal-clear PMMA body showing the double-wall construction. Pearlescent white finish. Pure white background, three-quarter elevated view, studio lighting showing acrylic clarity and lid sheen. No text. Photorealistic.
```

---

#### product-lpk-aj-001-lifestyle.jpg
**用途**：产品场景图

```
Prompt:
Skincare vanity flat-lay — a clear double-wall acrylic face cream jar with silver lid, placed on a white marble tray with a small spatula, dried white flowers and folded white linen. Soft overhead natural light. Clean luxury skincare aesthetic. No text. Photorealistic.
```

---

#### product-lpk-aj-001-detail.jpg
**用途**：产品细节图（双层壁截面细节）

```
Prompt:
Macro close-up of a double-wall acrylic cosmetic jar, cross-section view showing the air gap between inner and outer PMMA walls. The electroplated silver lid edge detail visible. Studio lighting highlighting the optical clarity of the acrylic material. No text. Photorealistic.
```

---

### SKU 05 — 亚克力粉底泵瓶 30ml（lpk-aj-002）

#### product-lpk-aj-002-hero.jpg
**用途**：产品主图，白底正面图

```
Prompt:
Product photography of a 30ml slim transparent acrylic foundation pump bottle with rose gold PP pump and cap. The clear acrylic body reveals the product inside. Clean white background, vertical composition, soft studio lighting showing bottle transparency and pump detail. No text. Photorealistic.
```

---

#### product-lpk-aj-002-lifestyle.jpg
**用途**：产品场景图

```
Prompt:
Makeup vanity scene — a transparent acrylic foundation pump bottle with rose gold pump standing on a glass vanity tray alongside a makeup brush, a beauty blender sponge and a small mirror. Soft warm light, feminine luxury makeup aesthetic. No text. Photorealistic.
```

---

#### product-lpk-aj-002-detail.jpg
**用途**：产品细节图（泵头细节）

```
Prompt:
Macro close-up of a rose gold PP pump actuator on a transparent acrylic foundation bottle. Focus on the pump nozzle, actuator surface texture and the foundation product visible through the clear bottle body. Soft studio lighting. No text. Photorealistic.
```

---

### SKU 06 — 亚克力眼霜罐 15ml（lpk-aj-003）

#### product-lpk-aj-003-hero.jpg
**用途**：产品主图，白底正面图

```
Prompt:
Product photography of a compact 15ml double-wall acrylic eye cream jar with rose gold electroplated lid featuring 3D diamond-cut embossing pattern. Small elegant form. Pure white background, close-up three-quarter view, studio lighting emphasizing the diamond-cut lid pattern and acrylic clarity. No text. Photorealistic.
```

---

#### product-lpk-aj-003-lifestyle.jpg
**用途**：产品场景图

```
Prompt:
Luxury eye care scene — a small acrylic eye cream jar with rose gold embossed lid on a white marble surface beside an eye cream spatula, a small amethyst crystal and soft pink sakura petals. Soft morning light, premium anti-aging skincare aesthetic. No text. Photorealistic.
```

---

#### product-lpk-aj-003-detail.jpg
**用途**：产品细节图（压纹盖面细节）

```
Prompt:
Macro close-up of a rose gold electroplated acrylic jar lid with 3D diamond-cut geometric embossing pattern. Studio macro lighting highlighting the faceted surface, deep shadows in embossed valleys, metallic sheen on raised surfaces. Premium cosmetic packaging detail. No text. Photorealistic.
```

---

### SKU 07 — PP 可补充膏霜罐 50ml（lpk-ppj-001）

#### product-lpk-ppj-001-hero.jpg
**用途**：产品主图，白底正面图

```
Prompt:
Product photography of a 50ml PP refillable cream jar with matte frosted finish in white, showing the outer shell and inner replacement cup displayed separately beside it. Clean sustainable packaging design. Pure white background, soft studio lighting emphasizing matte soft-touch texture. No text. Photorealistic.
```

---

#### product-lpk-ppj-001-lifestyle.jpg
**用途**：产品场景图（内胆展示）

```
Prompt:
Eco-conscious skincare scene — a matte white PP refillable cream jar with its inner cup refill placed beside it on a natural linen cloth, with a small branch of eucalyptus and a recycling symbol embossed card nearby. Soft natural daylight, clean sustainable beauty aesthetic. No text. Photorealistic.
```

---

#### product-lpk-ppj-001-detail.jpg
**用途**：产品细节图（内胆卡扣细节）

```
Prompt:
Macro close-up of a PP refillable cosmetic jar showing the inner cup being removed from the outer shell. Focus on the snap-fit mechanism, the matte frosted PP texture and the clean separation between inner and outer components. Studio lighting with soft shadows. No text. Photorealistic.
```

---

### SKU 08 — PET 洁面泡沫泵瓶 150ml（lpk-pet-001）

#### product-lpk-pet-001-hero.jpg
**用途**：产品主图，白底正面图

```
Prompt:
Product photography of a 150ml PET foam pump cleanser bottle in frosted white with white PP foam pump head. Tall slender form. Pure white background, front view, soft studio lighting showing the frosted PET texture and foam pump mechanism. No text. Photorealistic.
```

---

#### product-lpk-pet-001-lifestyle.jpg
**用途**：产品场景图

```
Prompt:
Bathroom skincare routine scene — a frosted PET foam pump cleanser bottle beside a white ceramic basin with foam bubbles on the surface, a soft face towel and a small green plant. Clean morning light, fresh and clean skincare aesthetic. No text. Photorealistic.
```

---

#### product-lpk-pet-001-detail.jpg
**用途**：产品细节图（泡沫泵头出泡细节）

```
Prompt:
Macro close-up of a white foam pump head dispensing fluffy white foam on a fingertip. The pump actuator pressed halfway, foam visible at nozzle. Soft studio lighting, clean white background, fresh clean aesthetic. No text. Photorealistic.
```

---

### SKU 09 — HDPE 洗发水按压瓶 300ml（lpk-hdpe-001）

#### product-lpk-hdpe-001-hero.jpg
**用途**：产品主图，白底正面图

```
Prompt:
Product photography of a 300ml HDPE shampoo pump bottle in matte white with soft-touch finish and white PP pump. Tall cylindrical form with rounded shoulders. Pure white background, front view, soft diffused studio lighting showing the matte tactile surface texture. No text. Photorealistic.
```

---

#### product-lpk-hdpe-001-lifestyle.jpg
**用途**：产品场景图

```
Prompt:
Luxury bathroom shelf scene — a tall matte white HDPE shampoo pump bottle and a matching conditioner bottle on a white wooden shelf, with a loofah, folded white towels and a sprig of eucalyptus. Warm bathroom light, spa hotel aesthetic. No text. Photorealistic.
```

---

#### product-lpk-hdpe-001-detail.jpg
**用途**：产品细节图（软触感表面质感）

```
Prompt:
Macro close-up of a matte soft-touch HDPE bottle surface. Focus on the tactile matte texture, slight fingerprint smudge showing softness, edge detail of the bottle shoulder. Studio lighting showing the velvety non-reflective surface quality. No text. Photorealistic.
```

---

### SKU 10 — 铝制旋转口红管（lpk-al-001）

#### product-lpk-al-001-hero.jpg
**用途**：产品主图，白底正面图

```
Prompt:
Product photography of a premium aluminum twist-up lipstick tube in gun-metal anodized finish with brushed texture. Elegant slender form, bullet-shaped lipstick extended halfway. Pure black background, single product, studio lighting with specular highlights on brushed aluminum surface. No text. Photorealistic.
```

---

#### product-lpk-al-001-lifestyle.jpg
**用途**：产品场景图

```
Prompt:
Luxury makeup vanity scene — an aluminum lipstick tube in rose gold anodized finish alongside a matching compact mirror, a gold ring and scattered dried rose petals on a dark marble surface. Dramatic side lighting, high-end cosmetic brand editorial. No text. Photorealistic.
```

---

#### product-lpk-al-001-detail.jpg
**用途**：产品细节图（阳极氧化表面细节）

```
Prompt:
Macro close-up of an anodized aluminum lipstick tube surface showing the fine brushed linear texture and the twist mechanism collar joint. Focus on the aluminum surface micro-texture, subtle light reflections on the anodized coating. Premium cosmetic packaging material study. No text. Photorealistic.
```

---

## 四、图片命名索引

| 序号 | 文件名 | 目录 | 用途 |
|------|--------|------|------|
| 1 | hero-banner-01.jpg | /images/hero/ | 首页主 Banner |
| 2 | hero-banner-02.jpg | /images/hero/ | 首页次级 Banner |
| 3 | cat-skincare.jpg | /images/categories/ | 护肤包装分类封面 |
| 4 | cat-makeup.jpg | /images/categories/ | 彩妆包装分类封面 |
| 5 | cat-homecare.jpg | /images/categories/ | 家清包装分类封面 |
| 6 | cat-glass.jpg | /images/categories/ | 玻璃材质分类封面 |
| 7 | cat-acrylic.jpg | /images/categories/ | 亚克力材质分类封面 |
| 8 | cat-plastic.jpg | /images/categories/ | 塑料材质分类封面 |
| 9 | cat-bottles.jpg | /images/categories/ | 瓶类分类封面 |
| 10 | cat-jars.jpg | /images/categories/ | 罐类分类封面 |
| 11 | cat-tubes.jpg | /images/categories/ | 管类分类封面 |
| 12 | product-lpk-gj-001-hero.jpg | /images/products/ | 玻璃面霜罐 主图 |
| 13 | product-lpk-gj-001-lifestyle.jpg | /images/products/ | 玻璃面霜罐 场景图 |
| 14 | product-lpk-gj-001-detail.jpg | /images/products/ | 玻璃面霜罐 细节图 |
| 15 | product-lpk-gb-001-hero.jpg | /images/products/ | 玻璃滴管瓶 主图 |
| 16 | product-lpk-gb-001-lifestyle.jpg | /images/products/ | 玻璃滴管瓶 场景图 |
| 17 | product-lpk-gb-001-detail.jpg | /images/products/ | 玻璃滴管瓶 细节图 |
| 18 | product-lpk-gb-002-hero.jpg | /images/products/ | 玻璃乳液瓶 主图 |
| 19 | product-lpk-gb-002-lifestyle.jpg | /images/products/ | 玻璃乳液瓶 场景图 |
| 20 | product-lpk-gb-002-detail.jpg | /images/products/ | 玻璃乳液瓶 细节图 |
| 21 | product-lpk-aj-001-hero.jpg | /images/products/ | 亚克力面霜罐 主图 |
| 22 | product-lpk-aj-001-lifestyle.jpg | /images/products/ | 亚克力面霜罐 场景图 |
| 23 | product-lpk-aj-001-detail.jpg | /images/products/ | 亚克力面霜罐 细节图 |
| 24 | product-lpk-aj-002-hero.jpg | /images/products/ | 亚克力粉底瓶 主图 |
| 25 | product-lpk-aj-002-lifestyle.jpg | /images/products/ | 亚克力粉底瓶 场景图 |
| 26 | product-lpk-aj-002-detail.jpg | /images/products/ | 亚克力粉底瓶 细节图 |
| 27 | product-lpk-aj-003-hero.jpg | /images/products/ | 亚克力眼霜罐 主图 |
| 28 | product-lpk-aj-003-lifestyle.jpg | /images/products/ | 亚克力眼霜罐 场景图 |
| 29 | product-lpk-aj-003-detail.jpg | /images/products/ | 亚克力眼霜罐 细节图 |
| 30 | product-lpk-ppj-001-hero.jpg | /images/products/ | PP可补充罐 主图 |
| 31 | product-lpk-ppj-001-lifestyle.jpg | /images/products/ | PP可补充罐 场景图 |
| 32 | product-lpk-ppj-001-detail.jpg | /images/products/ | PP可补充罐 细节图 |
| 33 | product-lpk-pet-001-hero.jpg | /images/products/ | PET泡沫泵瓶 主图 |
| 34 | product-lpk-pet-001-lifestyle.jpg | /images/products/ | PET泡沫泵瓶 场景图 |
| 35 | product-lpk-pet-001-detail.jpg | /images/products/ | PET泡沫泵瓶 细节图 |
| 36 | product-lpk-hdpe-001-hero.jpg | /images/products/ | HDPE洗发瓶 主图 |
| 37 | product-lpk-hdpe-001-lifestyle.jpg | /images/products/ | HDPE洗发瓶 场景图 |
| 38 | product-lpk-hdpe-001-detail.jpg | /images/products/ | HDPE洗发瓶 细节图 |
| 39 | product-lpk-al-001-hero.jpg | /images/products/ | 铝制口红管 主图 |
| 40 | product-lpk-al-001-lifestyle.jpg | /images/products/ | 铝制口红管 场景图 |
| 41 | product-lpk-al-001-detail.jpg | /images/products/ | 铝制口红管 细节图 |
