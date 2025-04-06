"use client"

import type React from "react"
import { useState, useEffect, useMemo } from "react"
import { Plus, Minus, Users, Check, X, Unlock, UserCheck } from "lucide-react"

// Types
type TableItem = {
  id: string
  number: number
  status: "free" | "occupied"
  people: number
}

type CategoryOption = {
  id: string
  label: string
}

export default function TableManagement() {
  // Categories - Removed counts as they will be calculated dynamically
  const categories: CategoryOption[] = [
    { id: "fumoir", label: "Raucherbereich" },
    { id: "restaurant", label: "Restaurant" },
    { id: "terrasse", label: "Terrasse" },
  ]

  // Create tables for each category
  const restaurantTables: TableItem[] = Array.from({ length: 22 }, (_, i) => ({
    id: `R-${String(i + 1).padStart(2, "0")}`,
    number: i + 1,
    status: "free",
    people: 0,
  }))

  const fumoirTables: TableItem[] = Array.from({ length: 26 }, (_, i) => ({
    id: `F-${String(i + 1).padStart(2, "0")}`,
    number: i + 1,
    status: "free",
    people: 0,
  }))

  const terrasseTables: TableItem[] = Array.from({ length: 20 }, (_, i) => ({
    id: `T-${String(i + 1).padStart(2, "0")}`,
    number: i + 1,
    status: "free",
    people: 0,
  }))

  // States - Default to "fumoir" instead of "all"
  const [selectedCategory, setSelectedCategory] = useState("fumoir")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTable, setSelectedTable] = useState<{
    category: string
    id: string
    status: "free" | "occupied"
    people: number
  } | null>(null)

  // State for tables with localStorage persistence
  const [tables, setTables] = useState<{
    restaurant: TableItem[]
    fumoir: TableItem[]
    terrasse: TableItem[]
  }>({
    restaurant: restaurantTables,
    fumoir: fumoirTables,
    terrasse: terrasseTables,
  })

  // Load table statuses from localStorage on initial render
  useEffect(() => {
    const savedTables = localStorage.getItem("tableStatuses")
    if (savedTables) {
      setTables(JSON.parse(savedTables))
    }
  }, [])

  // Save to localStorage whenever tables change
  useEffect(() => {
    localStorage.setItem("tableStatuses", JSON.stringify(tables))
  }, [tables])

  // Calculate free tables count for each category
  const freeTables = useMemo(() => {
    return {
      restaurant: tables.restaurant.filter((table) => table.status === "free").length,
      fumoir: tables.fumoir.filter((table) => table.status === "free").length,
      terrasse: tables.terrasse.filter((table) => table.status === "free").length,
    }
  }, [tables])

  // Get current tables based on selected category
  const getCurrentTables = () => {
    switch (selectedCategory) {
      case "restaurant":
        return tables.restaurant
      case "fumoir":
        return tables.fumoir
      case "terrasse":
        return tables.terrasse
      default:
        return tables.fumoir // Default to fumoir instead of all tables
    }
  }

  const handleTableClick = (table: TableItem) => {
    let category = ""
    if (table.id.startsWith("R-")) {
      category = "restaurant"
    } else if (table.id.startsWith("F-")) {
      category = "fumoir"
    } else if (table.id.startsWith("T-")) {
      category = "terrasse"
    }

    setSelectedTable({
      category,
      id: table.id,
      status: table.status,
      people: table.people,
    })
    setIsModalOpen(true)
  }

  const handleSave = (status: "free" | "occupied", people: number) => {
    if (!selectedTable) return

    setTables((prev) => {
      const newTables = { ...prev }

      // Find and update the table in the correct category
      newTables[selectedTable.category as keyof typeof newTables] = newTables[
        selectedTable.category as keyof typeof newTables
      ].map((table) => (table.id === selectedTable.id ? { ...table, status, people } : table))

      return newTables
    })
  }

  const handleIncreasePeople = (event: React.MouseEvent, tableId: string) => {
    event.stopPropagation()

    setTables((prev) => {
      const newTables = { ...prev }

      // Update in all categories
      Object.keys(newTables).forEach((category) => {
        newTables[category as keyof typeof newTables] = newTables[category as keyof typeof newTables].map((table) =>
          table.id === tableId ? { ...table, people: table.people + 1 } : table,
        )
      })

      return newTables
    })
  }

  const handleDecreasePeople = (event: React.MouseEvent, tableId: string) => {
    event.stopPropagation()

    setTables((prev) => {
      const newTables = { ...prev }

      // Update in all categories
      Object.keys(newTables).forEach((category) => {
        newTables[category as keyof typeof newTables] = newTables[category as keyof typeof newTables].map((table) =>
          table.id === tableId ? { ...table, people: Math.max(0, table.people - 1) } : table,
        )
      })

      return newTables
    })
  }

  const currentTables = getCurrentTables()

  return (
    <div className="container mx-auto p-4 bg-white min-h-screen">
      {/* Restaurant Logo */}
      <div className="flex justify-center items-center py-4 mb-6">
        <div className="relative w-64 h-24 shadow-lg rounded-lg overflow-hidden border">
          <img src="/restaurant-logo.png" alt="Restaurant Logo" className="w-full h-full object-contain p-2" />
        </div>
      </div>

      {/* Category Filter - with horizontal scroll for small screens */}
      <div className="sticky top-0 bg-white z-10 py-4 mb-6 shadow-md border-b">
        <div className="overflow-x-auto pb-2 -mx-4 px-4">
          <div className="flex gap-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-1.5 rounded-md text-white font-medium shadow-md whitespace-nowrap ${
                  category.id === selectedCategory ? "bg-pink-500" : "bg-blue-500"
                }`}
              >
                {category.label} ({freeTables[category.id as keyof typeof freeTables]})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
        {currentTables.map((table) => (
          <div
            key={table.id}
            className="bg-white shadow-lg rounded-lg p-4 relative cursor-pointer hover:shadow-xl transition-shadow border"
            onClick={() => handleTableClick(table)}
          >
            <div className="flex justify-between items-start">
              <div
                className={`w-16 h-16 ${table.status === "free" ? "bg-blue-500" : "bg-pink-500"} rounded-md flex items-center justify-center text-white text-3xl font-bold mb-3 shadow-md`}
              >
                {table.number}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-gray-800 font-medium">{table.id}</div>

              {/* Número de personas (antes era el estado) */}
              <div className="flex items-center gap-1 text-gray-600">
                <Users size={16} />
                <span className="text-lg font-medium">{table.people}</span>
              </div>
            </div>

            {/* Estado (antes era el número de personas) */}
            <div className="mt-2 flex items-center justify-between bg-white">
              <div
                className={`text-sm ${table.status === "free" ? "text-blue-500" : "text-pink-500"} font-medium flex items-center gap-1`}
              >
                {table.status === "free" ? (
                  <>
                    <Unlock size={14} />
                    <span>Frei</span>
                  </>
                ) : (
                  <>
                    <UserCheck size={14} />
                    <span>Besetzt</span>
                  </>
                )}
              </div>
              <div className="flex items-center gap-1">
                <button
                  className="h-7 w-7 rounded-md flex items-center justify-center hover:bg-gray-100 shadow"
                  onClick={(e) => handleDecreasePeople(e, table.id)}
                  disabled={table.people <= 0}
                >
                  <Minus size={16} />
                </button>
                <button
                  className="h-7 w-7 rounded-md flex items-center justify-center hover:bg-gray-100 shadow"
                  onClick={(e) => handleIncreasePeople(e, table.id)}
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Table Modal */}
      {isModalOpen && selectedTable && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white shadow-2xl rounded-lg max-w-[425px] w-full p-6 border">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 ${selectedTable.status === "free" ? "bg-blue-500" : "bg-pink-500"} rounded-md flex items-center justify-center text-white font-bold shadow-md`}
                >
                  {selectedTable.id.split("-")[1]}
                </div>
                <h2 className="text-xl font-semibold">Tisch {selectedTable.id}</h2>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={20} />
              </button>
            </div>
            <p className="text-gray-500 mb-4">Status und Personenanzahl des Tisches ändern</p>

            <div className="h-px bg-gray-200 my-4" />

            <div className="py-4 space-y-6">
              <div className="space-y-3">
                <label className="text-base font-medium">Tischstatus</label>
                <div className="grid grid-cols-2 gap-2">
                  <div
                    className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 cursor-pointer shadow-md ${
                      selectedTable.status === "free" ? "border-blue-500 bg-blue-50" : "border-gray-200"
                    }`}
                    onClick={() => setSelectedTable({ ...selectedTable, status: "free" })}
                  >
                    <Unlock size={24} className="text-blue-500" />
                    <span className="font-medium">Frei</span>
                  </div>

                  <div
                    className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 cursor-pointer shadow-md ${
                      selectedTable.status === "occupied" ? "border-pink-500 bg-pink-50" : "border-gray-200"
                    }`}
                    onClick={() => setSelectedTable({ ...selectedTable, status: "occupied" })}
                  >
                    <UserCheck size={24} className="text-pink-500" />
                    <span className="font-medium">Besetzt</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-base font-medium">Personenanzahl</label>
                <div className="flex items-center justify-center space-x-4 p-3 border rounded-lg shadow-md">
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedTable({ ...selectedTable, people: Math.max(0, selectedTable.people - 1) })
                    }
                    disabled={selectedTable.people <= 0}
                    className="h-10 w-10 rounded-full border flex items-center justify-center disabled:opacity-50 shadow"
                  >
                    <Minus className="h-5 w-5" />
                  </button>
                  <div className="flex items-center justify-center gap-2 min-w-[80px]">
                    <Users className="h-5 w-5 text-gray-500" />
                    <span className="text-2xl font-medium">{selectedTable.people}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedTable({ ...selectedTable, people: selectedTable.people + 1 })}
                    className="h-10 w-10 rounded-full border flex items-center justify-center shadow"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="h-px bg-gray-200 my-4" />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 border rounded-md flex items-center gap-1 hover:bg-gray-50 shadow"
              >
                <X className="h-4 w-4" />
                Abbrechen
              </button>
              <button
                onClick={() => {
                  handleSave(selectedTable.status, selectedTable.people)
                  setIsModalOpen(false)
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded-md flex items-center gap-1 hover:bg-blue-600 shadow-md"
              >
                <Check className="h-4 w-4" />
                Speichern
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

