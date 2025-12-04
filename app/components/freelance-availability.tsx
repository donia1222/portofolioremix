"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, CheckCircle, Hourglass } from "lucide-react"
import { useLanguage } from "~/context/LanguageContext"

export default function FreelanceAvailability() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden py-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 z-0"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 rounded-full bg-blue-600 filter blur-[100px]"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 15,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
        </motion.div>

        <motion.div
          className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 shadow-2xl rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="p-8 sm:p-10">
            <div className="space-y-8">
  

              {/* Work Process */}
              <div className="space-y-6">


                <div className="grid gap-6 md:grid-cols-2">
                  <motion.div
                    className="flex items-start gap-4 p-5 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                    whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="p-2 rounded-full bg-blue-500/20 text-blue-400">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{t("oneProject")}</p>
                      <p className="text-gray-400 mt-1">
                        {t("oneProjectDesc")}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4 p-5 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                    whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="p-2 rounded-full bg-blue-500/20 text-blue-400">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{t("fullDedication")}</p>
                      <p className="text-gray-400 mt-1">
                        {t("fullDedicationDesc")}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4 p-5 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                    whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="p-2 rounded-full bg-blue-500/20 text-blue-400">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{t("advancePlanning")}</p>
                      <p className="text-gray-400 mt-1">
                        {t("advancePlanningDesc")}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4 p-5 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                    whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="p-2 rounded-full bg-blue-500/20 text-blue-400">
                      <Hourglass className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{t("qualityTime")}</p>
                      <p className="text-gray-400 mt-1">
                        {t("qualityTimeDesc")}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>


            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-400">
            {t("urgentProject")}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
