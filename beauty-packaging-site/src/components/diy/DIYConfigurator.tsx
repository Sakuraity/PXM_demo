'use client'

import { useState, useEffect, useRef } from 'react'
import { createRealiboxSDK } from '@/lib/realibox'
import { RealiboxSDK, DIYConfiguration } from '@/types'

interface DIYConfiguratorProps {
  productId: string
  onConfigurationChange?: (config: Partial<DIYConfiguration>) => void
  initialConfiguration?: Partial<DIYConfiguration>
}

export default function DIYConfigurator({ productId, onConfigurationChange, initialConfiguration }: DIYConfiguratorProps) {
  const [sdk, setSdk] = useState<RealiboxSDK | null>(null)
  const [activeTab, setActiveTab] = useState<'shape' | 'material' | 'finish' | 'decoration' | 'accessories'>('shape')
  const [configuration, setConfiguration] = useState<Partial<DIYConfiguration>>({
    id: Date.now().toString(),
    productId,
    shape: { type: 'bottle', variant: 'standard' },
    material: { type: 'glass' },
    finish: { type: 'clear' },
    decoration: {},
    accessories: {},
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    status: 'draft'
  })
  
  const viewerRef = useRef<HTMLDivElement>(null)

  // 初始化SDK
  useEffect(() => {
    if (viewerRef.current) {
      const realiboxSDK = createRealiboxSDK()
      realiboxSDK.init(viewerRef.current, `scene-${productId}`)
      setSdk(realiboxSDK)
      
      return () => {
        realiboxSDK.destroy()
      }
    }
  }, [productId])

  useEffect(() => {
    if (!initialConfiguration) return
    setConfiguration(prev => ({ ...prev, ...initialConfiguration }))
  }, [initialConfiguration])

  // 更新配置
  const updateConfiguration = (updates: Partial<DIYConfiguration>) => {
    const newConfig = { ...configuration, ...updates, updatedAt: new Date().toISOString() }
    setConfiguration(newConfig)
    onConfigurationChange?.(newConfig)
  }

  // 形状选项
  const shapeOptions = [
    { type: 'bottle', variant: 'standard', label: 'Standard Bottle' },
    { type: 'bottle', variant: 'pump', label: 'Pump Bottle' },
    { type: 'jar', variant: 'round', label: 'Round Jar' },
    { type: 'jar', variant: 'square', label: 'Square Jar' },
    { type: 'tube', variant: 'standard', label: 'Standard Tube' },
    { type: 'box', variant: 'rectangle', label: 'Rectangle Box' },
  ]

  // 材质选项
  const materialOptions = [
    { type: 'glass', label: 'Glass' },
    { type: 'plastic', subType: 'PET', label: 'PET Plastic' },
    { type: 'plastic', subType: 'PP', label: 'PP Plastic' },
    { type: 'plastic', subType: 'HDPE', label: 'HDPE Plastic' },
    { type: 'acrylic', label: 'Acrylic' },
    { type: 'metal', label: 'Metal' },
  ]

  // 表面处理选项
  const finishOptions = [
    { type: 'clear', label: 'Clear' },
    { type: 'frosted', label: 'Frosted' },
    { type: 'spray', label: 'Spray Coated' },
    { type: 'electroplate', label: 'Electroplated' },
    { type: 'matte', label: 'Matte' },
  ]

  // 颜色选项
  const colorOptions = [
    '#FFFFFF', '#000000', '#FF0000', '#00FF00', '#0000FF',
    '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500', '#800080'
  ]

  // 渲染形状选项
  const renderShapeOptions = () => (
    <div className="grid grid-cols-2 gap-4">
      {shapeOptions.map((option) => (
        <button
          key={`${option.type}-${option.variant}`}
          onClick={() => {
            updateConfiguration({ shape: { type: option.type as any, variant: option.variant } })
            sdk?.updateShape(option.variant)
          }}
          className={`p-4 border rounded-lg text-left transition-all ${
            configuration.shape?.variant === option.variant
              ? 'border-accent bg-accent/10'
              : 'border-gray-200 hover:border-accent'
          }`}
        >
          <div className="w-full h-20 bg-gray-100 rounded mb-2"></div>
          <p className="text-sm font-medium">{option.label}</p>
        </button>
      ))}
    </div>
  )

  // 渲染材质选项
  const renderMaterialOptions = () => (
    <div className="grid grid-cols-2 gap-4">
      {materialOptions.map((option) => (
        <button
          key={`${option.type}-${option.subType || ''}`}
          onClick={() => {
            updateConfiguration({ material: { type: option.type as any, subType: option.subType } })
            sdk?.updateMaterial(option.type)
          }}
          className={`p-4 border rounded-lg text-left transition-all ${
            configuration.material?.type === option.type && 
            configuration.material?.subType === option.subType
              ? 'border-accent bg-accent/10'
              : 'border-gray-200 hover:border-accent'
          }`}
        >
          <div className="w-full h-20 bg-gray-100 rounded mb-2"></div>
          <p className="text-sm font-medium">{option.label}</p>
        </button>
      ))}
    </div>
  )

  // 渲染表面处理选项
  const renderFinishOptions = () => (
    <div className="grid grid-cols-2 gap-4">
      {finishOptions.map((option) => (
        <button
          key={option.type}
          onClick={() => {
            updateConfiguration({ finish: { type: option.type as any, color: configuration.finish?.color } })
            sdk?.updateFinish(option.type)
          }}
          className={`p-4 border rounded-lg text-left transition-all ${
            configuration.finish?.type === option.type
              ? 'border-accent bg-accent/10'
              : 'border-gray-200 hover:border-accent'
          }`}
        >
          <div className="w-full h-20 bg-gray-100 rounded mb-2"></div>
          <p className="text-sm font-medium">{option.label}</p>
        </button>
      ))}
    </div>
  )

  // 渲染装饰选项
  const renderDecorationOptions = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-primary mb-2">Color</label>
        <div className="flex flex-wrap gap-2">
          {colorOptions.map((color) => (
            <button
              key={color}
              onClick={() => {
                updateConfiguration({ finish: { type: configuration.finish?.type || 'clear', color } })
                sdk?.updateColor(color)
              }}
              className={`w-10 h-10 rounded-lg border-2 transition-all ${
                configuration.finish?.color === color
                  ? 'border-accent scale-110'
                  : 'border-gray-200 hover:border-accent'
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-primary mb-2">Logo</label>
        <button className="btn-secondary">
          Upload Logo
        </button>
      </div>
    </div>
  )

  // 渲染配件选项
  const renderAccessoryOptions = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-primary mb-2">Cap</label>
        <select 
          className="w-full p-2 border border-gray-200 rounded-lg"
          onChange={(e) => updateConfiguration({ 
            accessories: { ...configuration.accessories, cap: e.target.value } 
          })}
        >
          <option value="">Select Cap</option>
          <option value="standard">Standard Cap</option>
          <option value="pump">Pump Cap</option>
          <option value="spray">Spray Cap</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-primary mb-2">Pump</label>
        <select 
          className="w-full p-2 border border-gray-200 rounded-lg"
          onChange={(e) => updateConfiguration({ 
            accessories: { ...configuration.accessories, pump: e.target.value } 
          })}
        >
          <option value="">Select Pump</option>
          <option value="lotion">Lotion Pump</option>
          <option value="foam">Foam Pump</option>
          <option value="spray">Spray Pump</option>
        </select>
      </div>
    </div>
  )

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* 3D预览区 */}
      <div>
        <h3 className="text-xl font-semibold text-primary mb-4">3D Preview</h3>
        <div 
          ref={viewerRef} 
          className="aspect-square bg-gray-100 rounded-lg overflow-hidden"
        />
      </div>

      {/* 配置选项 */}
      <div>
        <h3 className="text-xl font-semibold text-primary mb-4">Customize Your Packaging</h3>
        
        {/* 标签页导航 */}
        <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
          {[
            { id: 'shape', label: 'Shape' },
            { id: 'material', label: 'Material' },
            { id: 'finish', label: 'Finish' },
            { id: 'decoration', label: 'Decoration' },
            { id: 'accessories', label: 'Accessories' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 标签页内容 */}
        <div className="bg-white rounded-lg p-6">
          {activeTab === 'shape' && renderShapeOptions()}
          {activeTab === 'material' && renderMaterialOptions()}
          {activeTab === 'finish' && renderFinishOptions()}
          {activeTab === 'decoration' && renderDecorationOptions()}
          {activeTab === 'accessories' && renderAccessoryOptions()}
        </div>
      </div>
    </div>
  )
}
