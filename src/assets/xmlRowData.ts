const xmlRowData = `<?xml version="1.0" encoding="UTF-8"?>
<BATCH_MODE>
    <RUN>
        <PROPERTIES>
            <PROPERTY name="CLEAR_DESIGN_DIR" value="never"/>
            <PROPERTY name="KEEP_FILES" value=""/>
            <PROPERTY name="LOG_LEVEL" value="FINE"/>
            <PROPERTY name="NUM_CONC_DESIGNS" value="1"/>
            <PROPERTY name="CHECK_REPEATED_DESIGNS" value="true"/>
            <PROPERTY name="EVAL_UNFEASIBLE_DESIGNS" value="true"/>
            <PROPERTY name="FORCE_ERROR_DESIGNS_TO_NAN" value="true"/>
            <PROPERTY name="SAVE_ERROR_DESIGNS" value="true"/>
            <PROPERTY name="SAVE_REPEATED_DESIGNS" value="false"/>
        </PROPERTIES>
    </RUN>
    <RSM>
        <PROPERTIES>
            <PROPERTY name="RSM_PERCENTAGE" value="0"/>
        </PROPERTIES>
    </RSM>
    <MORDO version="2016">
        <PROPERTIES>
            <PROPERTY name="SAMPLING_MODE" value="latinhypercube_sampling"/>
            <PROPERTY name="SEED" value="1"/>
            <PROPERTY name="N_SAMPLES" value="1"/>
            <PROPERTY name="N_VIRTUAL_SAMPLES" value="0"/>
            <PROPERTY name="POLYNOMIAL_CHAOS" value="FULL"/>
            <PROPERTY name="ORDER_CHAOS" value="2"/>
            <PROPERTY name="REJECT_OUT_OF_BOUNDS_SAMPLES" value="false"/>
            <PROPERTY name="ERROR_SAMPLES_ACCEPTANCE" value="100"/>
            <PROPERTY name="RESAMPLE_REPEATED_ROBUST_DESIGNS" value="false"/>
        </PROPERTIES>
    </MORDO>
    <DOE mode="append" savedb="false">
        <PLUG_IN class="it.esteco.frontier.fpi.plugins.doe.sobol.plugin.SobolPlugIn" name="Sobol">
            <PROPERTY name="sobol.parameter.num.rows" value="20"/>
            <PROPERTY name="sobol.parameter.reject" value="true"/>
            <PROPERTY name="common.parameter.repeat.design" value="false"/>
        </PLUG_IN>
    </DOE>
    <SCHEDULER>
        <PLUG_IN class="it.esteco.frontier.fpi.plugins.schedulers.nsga2.plugin.NSGA2PlugIn" name="NSGA-II">
            <PROPERTY name="nsga2.parameter.num.generations" value="100"/>
            <PROPERTY name="nsga2.parameter.max.eval" value="1000"/>
            <PROPERTY keys="[nsga2.parameter.type.standard,nsga2.parameter.type.reduced,nsga2.parameter.type.variable,nsga2.parameter.type.steady]" name="nsga2.parameter.alg.type" options="[Original NSGA-II algorithm,Controlled Elitism,Variable Population Size,Steady State Evolution (MFGA)]" value="nsga2.parameter.type.standard"/>
            <PROPERTY name="nsga2.parameter.prob.crossover" value="0.9"/>
            <PROPERTY name="nsga2.parameter.prob.mutation.real" value="1.0"/>
            <PROPERTY name="nsga2.parameter.prob.mutation.binary" value="1.0"/>
            <PROPERTY name="nsga2.parameter.scaled.mutation" value="true"/>
            <PROPERTY name="nsga2.parameter.index.crossover" value="20.0"/>
            <PROPERTY name="nsga2.parameter.index.mutation" value="20.0"/>
            <PROPERTY keys="[nsga2.parameter.type.crossover.simple,nsga2.parameter.type.crossover.uniform]" name="nsga2.parameter.type.crossover" options="[Simple,Uniform]" value="nsga2.parameter.type.crossover.simple"/>
            <PROPERTY name="nsga2.parameter.random.generator.seed" value="1"/>
            <PROPERTY name="nsga2.parameter.categorize.generations" value="false"/>
        </PLUG_IN>
    </SCHEDULER>
    <DOE_DB>
        <VARIABLES lastModified="1620885099433">
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="CO_EGR" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="-100.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="CO_GPF" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="CO_HInj" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="400.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="CO_Primary" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="2000.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="CO_TWC" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="1400.0"/>
            <VARIABLE arrangement="ORDERED" base="21" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="VARIABLE" lowerbound="12.0" name="CR" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="16.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="2" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0" kind="VARIABLE" lowerbound="0.0" name="DJW" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="2" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0" kind="VARIABLE" lowerbound="0.0" name="DJY" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="2" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0" kind="VARIABLE" lowerbound="0.0" name="DSB" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="21" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.00" kind="VARIABLE" lowerbound="0.0" name="EGR" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="0.2" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="31" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="VARIABLE" lowerbound="0.0" name="EVT" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="60.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="2" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0" kind="VARIABLE" lowerbound="0.0" name="GPF" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="2" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0" kind="VARIABLE" lowerbound="0.0" name="HInj" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="31" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="VARIABLE" lowerbound="0.0" name="IVT" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="60.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="21" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="VARIABLE" lowerbound="0.0" name="LIVC" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="40.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="NOx_EGR" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="60.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="NOx_GPF" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="NOx_HInj" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="-20.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="NOx_Primary" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="120.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="NOx_TWC" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="60.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="PM_EGR" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="PM_GPF" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="6.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="PM_HInj" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="2.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="PM_Primary" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="9.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="PM_TWC" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_CR" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="5000.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_DJW" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="400.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_DJY" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="5300.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_DSB" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="4700.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_EGR" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="300.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_EVT" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="8000.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_GPF" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="300.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_HInj" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="1000.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_IVT" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="8000.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_LIVC" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="4000.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_RF1" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="15000.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_RF2" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="30000.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_RF3" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="45000.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_TWC" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="480.0"/>
            <VARIABLE arrangement="ORDERED" base="4" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0" kind="VARIABLE" lowerbound="0.0" name="RF" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="3.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="31" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="VARIABLE" lowerbound="-9.0" name="ST" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="-3.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="THC_EGR" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="-30.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="THC_GPF" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="THC_HInj" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="40.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="THC_Primary" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="200.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="THC_TWC" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="160.0"/>
            <VARIABLE arrangement="ORDERED" base="2" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0" kind="VARIABLE" lowerbound="0.0" name="TWC" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1.0" value="0.0"/>
        </VARIABLES>
    </DOE_DB>
    <DESIGNS_DB>
        <VARIABLES lastModified="1620885099433">
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="CO_EGR" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="-100.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="CO_GPF" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="CO_HInj" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="400.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="CO_Primary" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="2000.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="CO_TWC" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="1400.0"/>
            <VARIABLE arrangement="ORDERED" base="21" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="VARIABLE" lowerbound="12.0" name="CR" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="16.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="2" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0" kind="VARIABLE" lowerbound="0.0" name="DJW" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="2" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0" kind="VARIABLE" lowerbound="0.0" name="DJY" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="2" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0" kind="VARIABLE" lowerbound="0.0" name="DSB" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="21" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.00" kind="VARIABLE" lowerbound="0.0" name="EGR" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="0.2" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="31" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="VARIABLE" lowerbound="0.0" name="EVT" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="60.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="2" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0" kind="VARIABLE" lowerbound="0.0" name="GPF" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="2" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0" kind="VARIABLE" lowerbound="0.0" name="HInj" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="31" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="VARIABLE" lowerbound="0.0" name="IVT" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="60.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="21" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="VARIABLE" lowerbound="0.0" name="LIVC" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="40.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="NOx_EGR" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="60.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="NOx_GPF" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="NOx_HInj" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="-20.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="NOx_Primary" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="120.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="NOx_TWC" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="60.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="PM_EGR" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="PM_GPF" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="6.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="PM_HInj" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="2.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="PM_Primary" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="9.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="PM_TWC" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_CR" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="5000.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_DJW" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="400.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_DJY" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="5300.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_DSB" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="4700.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_EGR" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="300.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_EVT" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="8000.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_GPF" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="300.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_HInj" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="1000.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_IVT" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="8000.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_LIVC" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="4000.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_RF1" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="15000.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_RF2" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="30000.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_RF3" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="45000.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_TWC" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="480.0"/>
            <VARIABLE arrangement="ORDERED" base="4" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0" kind="VARIABLE" lowerbound="0.0" name="RF" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="3.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="31" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="VARIABLE" lowerbound="-9.0" name="ST" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="-3.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="THC_EGR" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="-30.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="THC_GPF" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="THC_HInj" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="40.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="THC_Primary" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="200.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="THC_TWC" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="160.0"/>
            <VARIABLE arrangement="ORDERED" base="2" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0" kind="VARIABLE" lowerbound="0.0" name="TWC" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1.0" value="0.0"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="CO" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.000" name="KI" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="NOx" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="PM" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="Peff" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="Pem" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0000" name="R" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="THC" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.00" name="Z" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.000" name="eff" value="NaN"/>
            <VARIABLE class="it.esteco.frontier.design.DesignObjective" description="" expression="R" format="#0.0000" kind="-1" name="Objective_R" value="NaN"/>
            <VARIABLE class="it.esteco.frontier.design.DesignConstraint" description="" expression="CO" format="#0.0" kind="1" limit="500.0" name="Constraint_CO" tolerance="0.0" value="NaN"/>
            <VARIABLE class="it.esteco.frontier.design.DesignConstraint" description="" expression="KI" format="#0.000" kind="1" limit="160.0" name="Constraint_KI" tolerance="0.0" value="NaN"/>
            <VARIABLE class="it.esteco.frontier.design.DesignConstraint" description="" expression="NOx" format="#0.0" kind="1" limit="35.0" name="Constraint_NOx" tolerance="0.0" value="NaN"/>
            <VARIABLE class="it.esteco.frontier.design.DesignConstraint" description="" expression="PM" format="#0.0" kind="1" limit="3.0" name="Constraint_PM" tolerance="0.0" value="NaN"/>
            <VARIABLE class="it.esteco.frontier.design.DesignConstraint" description="" expression="THC" format="#0.0" kind="1" limit="50.0" name="Constraint_THC" tolerance="0.0" value="NaN"/>
            <VARIABLE class="it.esteco.frontier.design.DesignConstraint" description="" expression="eff" format="#0.000" kind="-1" limit="40.0" name="Constraint_eff" tolerance="0.0" value="NaN"/>
        </VARIABLES>
    </DESIGNS_DB>
    <MORDO_DB>
        <VARIABLES lastModified="1620885099434">
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="CO_EGR" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="-100.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="CO_GPF" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="CO_HInj" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="400.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="CO_Primary" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="2000.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="CO_TWC" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="1400.0"/>
            <VARIABLE arrangement="ORDERED" base="21" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="VARIABLE" lowerbound="12.0" name="CR" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="16.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="2" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0" kind="VARIABLE" lowerbound="0.0" name="DJW" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="2" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0" kind="VARIABLE" lowerbound="0.0" name="DJY" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="2" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0" kind="VARIABLE" lowerbound="0.0" name="DSB" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="21" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.00" kind="VARIABLE" lowerbound="0.0" name="EGR" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="0.2" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="31" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="VARIABLE" lowerbound="0.0" name="EVT" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="60.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="2" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0" kind="VARIABLE" lowerbound="0.0" name="GPF" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="2" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0" kind="VARIABLE" lowerbound="0.0" name="HInj" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="31" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="VARIABLE" lowerbound="0.0" name="IVT" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="60.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="21" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="VARIABLE" lowerbound="0.0" name="LIVC" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="40.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="NOx_EGR" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="60.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="NOx_GPF" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="NOx_HInj" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="-20.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="NOx_Primary" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="120.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="NOx_TWC" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="60.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="PM_EGR" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="PM_GPF" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="6.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="PM_HInj" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="2.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="PM_Primary" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="9.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="PM_TWC" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_CR" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="5000.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_DJW" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="400.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_DJY" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="5300.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_DSB" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="4700.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_EGR" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="300.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_EVT" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="8000.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_GPF" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="300.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_HInj" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="1000.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_IVT" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="8000.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_LIVC" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="4000.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_RF1" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="15000.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_RF2" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="30000.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_RF3" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="45000.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="P_TWC" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="480.0"/>
            <VARIABLE arrangement="ORDERED" base="4" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0" kind="VARIABLE" lowerbound="0.0" name="RF" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="3.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="31" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="VARIABLE" lowerbound="-9.0" name="ST" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="-3.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="THC_EGR" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="-30.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="THC_GPF" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="0.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="THC_HInj" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="40.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="THC_Primary" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="200.0"/>
            <VARIABLE arrangement="ORDERED" base="0" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0.0" kind="CONSTANT" lowerbound="-1000.0" name="THC_TWC" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1000.0" value="160.0"/>
            <VARIABLE arrangement="ORDERED" base="2" class="it.esteco.procint.design.DesignInputVariable" description="" distribution="NONE" expression="" format="#0" kind="VARIABLE" lowerbound="0.0" name="TWC" scale="0" shape1="0" shape2="0" tolerance="0.0" upperbound="1.0" value="0.0"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="CO" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="CO.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="CO.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="CO.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="CO.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="CO_EGR.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="CO_EGR.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="CO_EGR.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="CO_EGR.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="CO_GPF.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="CO_GPF.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="CO_GPF.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="CO_GPF.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="CO_HInj.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="CO_HInj.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="CO_HInj.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="CO_HInj.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="CO_Primary.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="CO_Primary.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="CO_Primary.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="CO_Primary.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="CO_TWC.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="CO_TWC.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="CO_TWC.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="CO_TWC.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="CR.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="CR.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="CR.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="CR.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="DJW.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="DJW.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="DJW.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="DJW.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="DJY.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="DJY.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="DJY.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="DJY.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="DSB.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="DSB.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="DSB.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="DSB.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.00" name="EGR.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.00" name="EGR.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.00" name="EGR.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.00" name="EGR.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="EVT.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="EVT.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="EVT.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="EVT.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="GPF.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="GPF.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="GPF.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="GPF.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="HInj.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="HInj.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="HInj.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="HInj.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="IVT.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="IVT.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="IVT.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="IVT.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.000" name="KI" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.000" name="KI.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.000" name="KI.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.000" name="KI.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.000" name="KI.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="LIVC.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="LIVC.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="LIVC.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="LIVC.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="NOx" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="NOx.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="NOx.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="NOx.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="NOx.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="NOx_EGR.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="NOx_EGR.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="NOx_EGR.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="NOx_EGR.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="NOx_GPF.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="NOx_GPF.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="NOx_GPF.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="NOx_GPF.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="NOx_HInj.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="NOx_HInj.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="NOx_HInj.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="NOx_HInj.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="NOx_Primary.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="NOx_Primary.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="NOx_Primary.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="NOx_Primary.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="NOx_TWC.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="NOx_TWC.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="NOx_TWC.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="NOx_TWC.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="PM" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="PM.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="PM.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="PM.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="PM.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="PM_EGR.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="PM_EGR.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="PM_EGR.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="PM_EGR.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="PM_GPF.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="PM_GPF.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="PM_GPF.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="PM_GPF.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="PM_HInj.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="PM_HInj.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="PM_HInj.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="PM_HInj.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="PM_Primary.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="PM_Primary.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="PM_Primary.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="PM_Primary.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="PM_TWC.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="PM_TWC.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="PM_TWC.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="PM_TWC.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_CR.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_CR.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_CR.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_CR.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_DJW.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_DJW.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_DJW.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_DJW.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_DJY.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_DJY.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_DJY.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_DJY.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_DSB.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_DSB.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_DSB.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_DSB.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_EGR.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_EGR.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_EGR.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_EGR.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_EVT.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_EVT.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_EVT.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_EVT.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_GPF.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_GPF.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_GPF.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_GPF.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_HInj.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_HInj.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_HInj.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_HInj.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_IVT.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_IVT.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_IVT.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_IVT.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_LIVC.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_LIVC.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_LIVC.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_LIVC.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_RF1.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_RF1.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_RF1.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_RF1.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_RF2.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_RF2.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_RF2.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_RF2.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_RF3.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_RF3.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_RF3.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_RF3.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_TWC.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_TWC.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_TWC.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="P_TWC.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="Peff" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="Peff.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="Peff.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="Peff.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="Peff.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="Pem" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="Pem.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="Pem.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="Pem.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="Pem.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0000" name="R" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0000" name="R.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0000" name="R.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0000" name="R.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0000" name="R.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="RF.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="RF.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="RF.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="RF.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="ST.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="ST.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="ST.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="ST.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="THC" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="THC.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="THC.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="THC.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="THC.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="THC_EGR.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="THC_EGR.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="THC_EGR.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="THC_EGR.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="THC_GPF.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="THC_GPF.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="THC_GPF.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="THC_GPF.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="THC_HInj.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="THC_HInj.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="THC_HInj.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="THC_HInj.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="THC_Primary.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="THC_Primary.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="THC_Primary.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="THC_Primary.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="THC_TWC.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="THC_TWC.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="THC_TWC.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.0" name="THC_TWC.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="TWC.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="TWC.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="TWC.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0" name="TWC.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.00" name="Z" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.00" name="Z.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.00" name="Z.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.00" name="Z.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.00" name="Z.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.000" name="eff" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.000" name="eff.MAX" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.000" name="eff.MEAN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.000" name="eff.MIN" value="NaN"/>
            <VARIABLE class="it.esteco.procint.design.DesignOutputVariable" description="" format="#0.000" name="eff.STDEV" value="NaN"/>
            <VARIABLE class="it.esteco.frontier.design.DesignObjective" description="" expression="R" format="#0.0000" kind="-1" name="Objective_R" value="NaN"/>
            <VARIABLE class="it.esteco.frontier.design.DesignConstraint" description="" expression="CO" format="#0.0" kind="1" limit="500.0" name="Constraint_CO" tolerance="0.0" value="NaN"/>
            <VARIABLE class="it.esteco.frontier.design.DesignConstraint" description="" expression="KI" format="#0.000" kind="1" limit="160.0" name="Constraint_KI" tolerance="0.0" value="NaN"/>
            <VARIABLE class="it.esteco.frontier.design.DesignConstraint" description="" expression="NOx" format="#0.0" kind="1" limit="35.0" name="Constraint_NOx" tolerance="0.0" value="NaN"/>
            <VARIABLE class="it.esteco.frontier.design.DesignConstraint" description="" expression="PM" format="#0.0" kind="1" limit="3.0" name="Constraint_PM" tolerance="0.0" value="NaN"/>
            <VARIABLE class="it.esteco.frontier.design.DesignConstraint" description="" expression="THC" format="#0.0" kind="1" limit="50.0" name="Constraint_THC" tolerance="0.0" value="NaN"/>
            <VARIABLE class="it.esteco.frontier.design.DesignConstraint" description="" expression="eff" format="#0.000" kind="-1" limit="40.0" name="Constraint_eff" tolerance="0.0" value="NaN"/>
        </VARIABLES>
    </MORDO_DB>
    <WORKFLOW_PARAMETERS>
        <INPUT_DATA/>
        <INPUT_ATTACHMENT/>
    </WORKFLOW_PARAMETERS>
    <PERCENTILE/>
</BATCH_MODE>
`;
export default xmlRowData;
